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
  const {
    question_title,
    test,
    difficulty_id,
    category_id,
    instruction,
    link_syllabus,
    initial_code,
    test_spec
  } = data.payload;
  return db
    .none(
      `INSERT INTO questions_answers (question_title, test, difficulty_id, category_id, instruction, link_syllabus, initial_code, test_spec)
  VALUES ($1, $2, $3,$4,$5,$6,$7, $8)`,
      [
        question_title,
        test,
        difficulty_id,
        category_id,
        instruction,
        link_syllabus,
        initial_code,
        test_spec
      ]
    )

    .catch(error => console.log(error));
}

function getUserData(user_id) {
  return db
    .any(`SELECT * FROM   user_data WHERE user_data.user_id = $1`, [user_id])
    .catch(error => console.log(error));
}

function getUserProgress(github_username) {
  return db
    .oneOrNone(
      `SELECT COUNT(completed) from users, user_data 
      WHERE users.github_username = $1
      AND user_data.user_id = users.id 
      AND completed = true`,
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

// getAllQuestions().then(data => console.log(data));

// getUserByUsername("mickey mouse").then(data => console.log(data));

module.exports = {
  getUserByUsername,
  getQuestions,
  getAllQuestions,
  sumbitQuestionOnDatabase,
  getUserData,
  getUserProgress,
  addUserOnLogIn
};
