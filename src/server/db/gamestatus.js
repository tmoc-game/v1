
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

module.exports = {
  getCurrentStatus
};
