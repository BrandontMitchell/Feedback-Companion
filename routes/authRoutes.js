const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback", 
    passport.authenticate("google"),
    (req, res) => { //redirect after login complete
      res.redirect('/surveys'); // res = response object, redirect responds to browsers request
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("you are now logged out");
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
