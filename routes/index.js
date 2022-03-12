const express = require("express");
const { ensureAuthenticated } = require("../config/auth");

const router = express.Router();

// *ROUTES*
router.get("/", (req, res) => res.render("index"));

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", { user: req.user })
);

module.exports = router;
