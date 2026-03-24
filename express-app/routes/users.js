const express = require('express');
const router = express.Router();

const users = [
  {
    "id": 1,
    "name": "Goodsoul Andrew"
  },
  {
    "id": 2,
    "name": "Volkov Vladislav"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
