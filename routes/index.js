const path = require("path");
const express = require("express");
const passport = require("passport");

const router = express.Router();

/*get home page*/

router.get("/", function(req, res, next) {
  // passport.authenticate("github", function(err, user, info) {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     return res.redirect("/login");
  //   } else
  //     return req.logIn(user, function(err) {
  //       if (err) {
  //         return next(err);
  //       }
  //       return res.redirect("/profile/" + user.username);
  //     });
  // });
  res.render("index", { title: "Constructor Wars", user: req.user });
});

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Login", user: req.user });
});

router.get("/profile", function(req, res, next) {
  res.render("profile", { title: "Profile" });
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
    res.redirect("/profile");
    // 'add user to database here'
  }
);

module.exports = router;
