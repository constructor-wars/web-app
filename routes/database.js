const path = require("path");

const pgp = require("pg-promise")();

require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
});

const db = pgp({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD
});

// const db = pgp({
//   host: process.env.HEROKU_HOST,
//   port: process.env.HEROKU_PORT,
//   database: process.env.HEROKU_DATABASE_URL,
//   user: process.env.HEROKU_USER,
//   ssl: process.env.HEROKU_SSL,
//   password: process.env.HEROKU_PASSWORD,
//   uri: process.env.HEROKU_URI
// });

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
    .then(data => data)
    .catch(error => console.log(error));
}

function sumbitQuestionOnDatabase(data) {
  console.log(data);
  const {
    question_title,
    test,
    difficulty_id,
    category_id,
    instruction,
    link_syllabus,
    initial_code
  } = data.payload;
  return db
    .none(
      `INSERT INTO questions_answers (question_title, test, difficulty_id, category_id, instruction, link_syllabus, initial_code)
  VALUES ($1, $2, $3,$4,$5,$6,$7)`,
      [
        question_title,
        test,
        difficulty_id,
        category_id,
        instruction,
        link_syllabus,
        initial_code
      ]
    )

    .catch(error => console.log(error));
}

function getUserData(user_id) {
  return db
    .any(`SELECT * FROM   user_data WHERE user_data.user_id = $1`, [user_id])
    .catch(error => console.log(error));
}

// getAllQuestions().then(data => console.log(data));

// getUserByUsername("mickey mouse").then(data => console.log(data));

module.exports = {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase,
  getUserData
};
