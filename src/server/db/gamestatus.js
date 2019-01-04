
function getCurrentStatus() {
  return {
    day: 0,
    money: 1000,
    inventory_level: 0,
    inventory: {
      0: {
        quantity: 2,
        avg_buying_price: 20,
      },
      1: {
        quantity: 10,
        avg_buying_price: 40,
      },
      3: {
        quantity: 30,
        avg_buying_price: 50,
      }
    },
  };
}

function getCurrentProductPriceTable() {
  return {
    0: {
      price: 100,
      quantity: 50,
    },
    1: {
      price: 99,
      quantity: 33,
    },
    2: {
      price: 23,
      quantity: 32,
    },
    3: {
      price: 44,
      quantity: 12,
    },
    4: {
      price: 82,
      quantity: 32,
    },
  };
}

module.exports = {
  getCurrentStatus,
  getCurrentProductPriceTable,
};
