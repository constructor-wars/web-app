const path = require("path");

const pgp = require("pg-promise")();

require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
});

const db = pgp({
  host: process.env.HEROKU_HOST,
  port: process.env.HEROKU_PORT,
  database: process.env.HEROKU_DATABASE_URL,
  user: process.env.HEROKU_USER,
  ssl: process.env.HEROKU_SSL,
  password: process.env.HEROKU_PASSWORD,
  uri: process.env.HEROKU_URI
});

function getUserByUsername(github_username) {
  return db
    .one(`SELECT * FROM users WHERE github_username = $1`, [github_username])
    .then(function(data) {
      return data;
    })
    .catch(error => console.log(error));
}

function getQuestions(id) {
  return db
    .any(`SELECT * FROM questions_answers WHERE id = $1`, [id])
    .then(function(data) {
      return data;
    })
    .catch(error => console.log(error));
}

function getAllQuestions() {
  return db
    .any(`SELECT * FROM questions_answers`)
    .then(function(data) {
      return data;
    })
    .catch(error => console.log(error));
}

function sumbitQuestionOnDatabase(data) {
  const {
    question,
    test,
    difficulty_id,
    category_id,
    instruction,
    link_syllabus,
    intital_code,
    created_by
  } = data;
  return db
    .one(
      `INSERT INTO questions_answers (question, test, difficulty_id, category_id, instruction, link_syllabus, intital_code, created_by)
  VALUES ($1, $2, $3,$4,$5,$6,$7,$8)`,
      [
        question,
        test,
        difficulty_id,
        category_id,
        instruction,
        link_syllabus,
        intital_code,
        created_by
      ]
    )
    .then(() => res.json({ submit: OK }))
    .catch(error => console.log(error));
}

// getAllQuestions().then(data => console.log(data));

// getUserByUsername("mickey mouse").then(data => console.log(data));

module.exports = {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase
};
