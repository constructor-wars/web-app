const express = require("express");

const router = express.Router();

const {
  getUserByUsername,
  getQuestions,
  getAllQuestions
} = require("./database");

router.get("/:username", function(req, res) {
  const { user } = req.params.username;
  console.log(user);

  getUserByUsername(user).then(data => res.json(data));
});

router.get("/question/:id", function(req, res) {
  const id = req.params.id;
  getQuestions(id).then(data => res.json(data));
});

router.get("/question", function(req, res) {
  getAllQuestions().then(data => res.json(data));
});

module.exports = router;
