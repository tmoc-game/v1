const { finishDay } = require('./const_values');
const products = require('./products');
const inventory = require('./inventory');

let fullDayOfPriceTable = [];

let currentStatus = {
  day: -1,
};

function RandomWithMinMax(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max - min));
}

function initializeGameStatus() {
  // Generate full Day Of Price Table
  fullDayOfPriceTable = [];
  for (let i = 0; i < finishDay; i += 1) {
    const dailyPPT = Object.keys(products).map((k) => {
      const productMinMax = products[k].random_param;
      return {
        code: k,
        price: RandomWithMinMax(productMinMax.min_price, productMinMax.max_price),
        quantity: RandomWithMinMax(productMinMax.min_quantity, productMinMax.max_quantity),
      };
    });
    const priceTable = {};
    dailyPPT.forEach((item) => { priceTable[item.code] = item; });
    fullDayOfPriceTable.push(priceTable);
  }

  // 초기값 설정
  currentStatus = {
    ...currentStatus,
    day: 0,
    money: 10000,
    inventory_level: 0,
    inventory: {},
    product_price_table: fullDayOfPriceTable[0],
  };

  return {
    result: 0x0000,
    message: 'success'
  };
}

function getCurrentProductPriceTable() {
  return currentStatus.product_price_table;
}

function getCurrentStatus() {
  return currentStatus;
}

function upgradeInventory() {
  if (currentStatus.day < 0) return { result: 0x0106, message: '저장된 게임이 없습니다.' };
  else if (currentStatus.inventory_level >= Object.keys(inventory).length) return { result: 0x0104, message: 'Inventory is in maximum level' };
  const nextLevel = inventory[currentStatus.inventory_level + 1];
  if (nextLevel.upgrade_price > currentStatus.money) return { result: 0x0101, message: '금액이 부족합니다.' };
  currentStatus.money -= nextLevel.upgrade_price;
  currentStatus.inventory_level += 1;
  return { result: 0x0000, message: 'Success' };
}

const accumulater = (ac, cv) => ac + cv;

function calcInventoryUsage() {
  return Object.keys(currentStatus.inventory)
    .map((k) => products[k].use_inventory_slot * currentStatus.inventory[k].quantity)
    .reduce(accumulater, 0);
}

function downgradeInventory() {
  if (currentStatus.day < 0) return { result: 0x0106, message: '저장된 게임이 없습니다.' };
  else if (currentStatus.inventory_level <= 0) return { result: 0x0107, message: 'Inventory is in minimum level' };
  const nextLevel = inventory[currentStatus.inventory_level - 1];
  if (calcInventoryUsage() > nextLevel.size) return { result: 0x0103, message: 'Inventory is full' };
  currentStatus.inventory_level -= 1;
  return { result: 0x0000, message: 'Success' };
}

function sleep() {
  if (currentStatus.day + 1 >= finishDay) {
    return { result: 0x0001, message: 'enging' };
  } else if (currentStatus.money < inventory[currentStatus.inventory_level].daily_price) {
    return { result: 0x0101, message: 'Not enought money to pay for rent' };
  }
  currentStatus.money -= inventory[currentStatus.inventory_level].daily_price;
  currentStatus.day += 1;
  currentStatus.product_price_table = fullDayOfPriceTable[currentStatus.day];
  return { result: 0x0000, message: 'Success' };
}

function buy(code, quantity) {
  const pricePerItem = currentStatus.product_price_table[code].price;

  if (currentStatus.day < 0) return { result: 0x0106, message: '저장된 게임이 없습니다.' };
  if (quantity > currentStatus.product_price_table[code].quantity) return { result: 0x0102, message: 'Not enought products' };
  const totalPrice = pricePerItem * quantity;
  if (totalPrice > currentStatus.money) return { result: 0x0101, message: 'Not enought money to pay for buy' };
  if (quantity + calcInventoryUsage() > inventory[currentStatus.inventory_level].size) return { result: 0x0103, message: 'Not enought Inventory' };

  currentStatus.money -= totalPrice;
  const ownProduct = currentStatus.inventory[code];
  if (ownProduct == null) currentStatus.inventory[code] = { quantity, avg_buying_price: pricePerItem };
  else {
    ownProduct.quantity += quantity;
    ownProduct.avg_buying_price = Math.floor(((ownProduct.avg_buying_price * ownProduct.quantity)
      + totalPrice) / (quantity + ownProduct.quantity));
  }
  currentStatus.product_price_table[code].quantity -= quantity;

  return { result: 0x0000, message: 'Success' };
}

function sell(code, quantity) {
  const pricePerItem = currentStatus.product_price_table[code].price;
  const ownProduct = currentStatus.inventory[code];

  if (currentStatus.day < 0) return { result: 0x0106, message: '저장된 게임이 없습니다.' };
  if (ownProduct == null) return { result: 0x0102, message: 'It is not on your inventory' };
  if (quantity > currentStatus.inventory[code].quantity) return { result: 0x0102, message: 'Not enought products' };
  const totalPrice = pricePerItem * quantity;

  currentStatus.money += totalPrice;
  ownProduct.quantity -= quantity;
  if (ownProduct.quantity <= 0) {
    delete currentStatus.inventory[code];
  }

  return { result: 0x0000, message: 'Success' };
}

module.exports = {
  initializeGameStatus,
  getCurrentStatus,
  getCurrentProductPriceTable,
  upgradeInventory,
  downgradeInventory,
  sleep,
  buy,
  sell,
};
