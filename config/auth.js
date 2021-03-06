module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.flash("error_msg", "Sorry! You are not logged in.");
      res.redirect("/users/login");
    }
  },
};
