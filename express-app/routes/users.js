const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    name: "Goodsoul Andrew",
  },
  {
    id: 2,
    name: "Volkov Vladislav",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

router.post("/", function (req, res, next) {
  const maxId = users[users.length - 1].id;
  // console.log(req.body)
  const newUser = {
    id: maxId + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
