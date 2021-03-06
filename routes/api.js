const express = require("express");

const router = express.Router();

const {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase,
  getUserData,
  getUserProgress,
  addCodeOnSave,
  updateYourQuestionOnDatabase
} = require("./database");

router.get("/questions", function(req, res) {
  getAllQuestions().then(data => res.json(data));
});

router.get("/question/:id", function(req, res) {
  const id = req.params.id;
  getQuestions(id).then(data => res.json(data));
});

router.post("/submitnewquestion", function(req, res) {
  const data = req.body;
  sumbitQuestionOnDatabase(data).then(data => res.json(data));
});

router.post("/updatequestion", function(req, res) {
  const data = req.body;
  updateYourQuestionOnDatabase(data).then(data => res.json(data));
});

router.post("/savecurrentcode", function(req, res) {
  const data = req.body;
  addCodeOnSave(data);
});

router.get("/getuserdata/:github_username", function(req, res) {
  const github_username = req.params.github_username;
  getUserData(github_username).then(data => res.json(data));
});

router.get("/getprogress/:username", function(req, res) {
  const github_username = req.params.username;
  getUserProgress(github_username).then(data => res.json(data));
});

router.get("/username/:username", function(req, res) {
  const { user } = req.params.username;
  getUserByUsername(user).then(data => res.json(data));
});

module.exports = router;
