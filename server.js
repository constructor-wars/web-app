const path = require("path");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("connect-ensure-login");

const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

require("dotenv").config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "to infinity and beyond",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.use("/profile", connection.ensureLoggedIn());
app.use("/dist", express.static(path.join(__dirname, "/dist")));

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});
