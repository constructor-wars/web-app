const database = require("./database");

const express = require("express");
const passport = require("passport");

const router = express.Router();

/*get home page*/

router.get("/", function(req, res, next) {
  if (!req.user) {
    return res.redirect("/login");
  }
  res.render("profile", {
    title: "Profile",
    GITHUB_DATA: JSON.stringify({ GITHUB_DATA: req.user })
  });
});

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Login" });
});

router.get("/profile", function(req, res, next) {
  res.render("profile", {
    title: "Profile",
    GITHUB_DATA: JSON.stringify({ GITHUB_DATA: req.user })
  });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/login");
});

router.get("/auth/github", passport.authenticate("github"));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    database.addUserOnLogIn(req.user.username);
    res.redirect("/profile");
  }
);

module.exports = router;
