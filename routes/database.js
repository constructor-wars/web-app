const path = require("path");

const pgp = require("pg-promise")();

require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
});

// const db = pgp({
//   host: process.env.POSTGRES_HOST,
//   port: process.env.POSTGRES_PORT,
//   database: process.env.POSTGRES_DATABASE,
//   username: process.env.POSTGRES_USERNAME,
//   password: process.env.POSTGRES_PASSWORD
// });

const db = pgp({
  host: process.env.HEROKU_HOST,
  port: process.env.HEROKU_PORT,
  database: process.env.HEROKU_DATABASE_URL,
  user: process.env.HEROKU_USER,
  ssl: process.env.HEROKU_SSL,
  password: process.env.HEROKU_PASSWORD,
  uri: process.env.HEROKU_URI
});

function getQuestions(id) {
  return db
    .one(`SELECT * FROM questions_answers WHERE id = $1`, [id])
    .then(function(data) {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error));
}

function getAllQuestions() {
  return db
    .any(`SELECT * FROM questions_answers`)
    .then(data => data)
    .catch(error => console.log(error));
}

function sumbitQuestionOnDatabase(data) {
  const {
    question_title,
    difficulty_id,
    category_id,
    instruction,
    link_syllabus,
    github_username,
    test_spec
  } = data;

  return db
    .one(
      `INSERT INTO questions_answers (question_title, difficulty_id, category_id, instruction, link_syllabus, test_spec, github_username)
  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [
        question_title,
        difficulty_id,
        category_id,
        instruction,
        link_syllabus,
        test_spec,
        github_username
      ]
    )

    .catch(error => console.log(error));
}

function updateYourQuestionOnDatabase(data) {
  const {
    id,
    question_title,
    difficulty_id,
    category_id,
    instruction,
    link_syllabus,
    test_spec,
    github_username
  } = data;

  return db
    .one(
      `UPDATE questions_answers 
      SET question_title = $2, difficulty_id = $3, category_id = $4, instruction = $5, link_syllabus = $6, test_spec = $7, github_username = $8
      WHERE id=$1
      returning id`,
      [
        id,
        question_title,
        difficulty_id,
        category_id,
        instruction,
        link_syllabus,
        test_spec,
        github_username
      ]
    )

    .catch(error => {
      console.log(error);
    });
}

function getUserData(github_username) {
  return db
    .any(`SELECT * FROM questions_answers WHERE github_username = $1`, [
      github_username
    ])
    .catch(error => console.log(error));
}

function getUserProgress(github_username) {
  return db
    .oneOrNone(
      `SELECT COUNT(github_username) from questions_answers
      WHERE github_username = $1`,
      [github_username]
    )
    .catch(error => console.log(error));
}

function getUserByUsername(github_username) {
  return db
    .one(`SELECT * FROM users WHERE github_username = $1`, [github_username])
    .catch(error => {
      console.log(error);
      return "User unknown";
    });
}

// getUserByUsername("mickey mousex").then(data => console.log(data));

function addUserOnLogIn(usernameAreYouThere) {
  getUserByUsername(usernameAreYouThere)
    .then(data => {
      console.log({ data });

      if (data === "User unknown") {
        db.none(`INSERT INTO users (github_username) VALUES ($1) `, [
          usernameAreYouThere
        ]).catch(error => console.log({ error }));
      }
    })
    .catch(error => console.log({ error }));
}

function addCodeOnSave(currentCodeToSave) {
  const {
    user_id,
    question_id,
    user_edits,
    user_notes,
    completed,
    ask_for_help
  } = currentCodeToSave;

  db.none(
    `INSERT INTO user_data (user_id, question_id, user_edits, user_notes, completed, ask_for_help) VALUES($1, $2, $3, $4, $5, $6)`,
    [user_id, question_id, user_edits, user_notes, completed, ask_for_help]
  );
}

// getAllQuestions().then(data => console.log(data));

// getUserByUsername("mickey mouse").then(data => console.log(data));

module.exports = {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase,
  updateYourQuestionOnDatabase,
  getUserData,
  getUserProgress,
  addUserOnLogIn,
  addCodeOnSave
};
