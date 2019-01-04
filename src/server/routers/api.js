const express = require('express');
const products = require('../db/products');
const inventory = require('../db/inventory');
const gameStatus = require('../db/gamestatus');

const router = express.Router();

router.get('/load_default_settings', (req, res) => {
  res.json({
    finish_day: 100,
    products,
    inventory,
    game_status: gameStatus.getCurrentStatus(),
  });
});

router.get('/game_status', (req, res) => {
  res.json({
    ...gameStatus.getCurrentStatus(),
  });
});

module.exports = router;
