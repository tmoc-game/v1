const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('hahahaha 2');
});

module.exports = router;
