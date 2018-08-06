const express = require("express");

const router = express.Router();

const {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase,
  getUserData
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

router.post("/submitnewquestion", function(req, res) {
  const data = req.body;
  sumbitQuestionOnDatabase(data).then(data => res.json(data));
});

router.get("/getuserdata/:id", function(req, res) {
  const user_id = req.params.id;
  getUserData(user_id).then(data => res.json(data));
});

module.exports = router;
