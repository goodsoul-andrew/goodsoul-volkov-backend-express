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

router.get('/:id', function(req, res, next) {
    const user_id = parseInt(req.params.id);
    const user = users.find(u => u.id === user_id);
    
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else{
        res.send(user);
    }
});

module.exports = router;
