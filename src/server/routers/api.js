const express = require('express');
const products = require('../db/products');
const inventory = require('../db/inventory');
const gameStatus = require('../db/gamestatus');
const constValues = require('../db/const_values');

const router = express.Router();

router.get('/load_default_settings', (req, res) => {
  res.json({
    finish_day: constValues.finishDay,
    products,
    inventory
  });
});

router.get('/game_status', (req, res) => {
  res.json({
    ...gameStatus.getCurrentStatus(),
  });
});

router.post('/newgame', (req, res) => {
  res.json(
    gameStatus.initializeGameStatus()
  );
});

router.put('/inventory/upgrade', (req, res) => {
  res.json(
    gameStatus.upgradeInventory()
  );
});

router.put('/inventory/downgrade', (req, res) => {
  res.json(
    gameStatus.downgradeInventory()
  );
});

router.put('/sleep', (req, res) => {
  res.json(
    gameStatus.sleep()
  );
});

router.put('/buy/:productCode/:quantity', (req, res) => {
  const { productCode, quantity } = req.params;
  res.json(
    gameStatus.buy(parseInt(productCode, 10), parseInt(quantity, 10))
  );
});

router.put('/sell/:productCode/:quantity', (req, res) => {
  const { productCode, quantity } = req.params;
  res.json(
    gameStatus.sell(parseInt(productCode, 10), parseInt(quantity, 10))
  );
});

module.exports = router;
