/**
 * This module contains the routes for setting light/dark theme.
 */

const express = require("express");
const router = express.Router();

router.get("/light", (req, res) => {
    res.cookie("theme", "light");
    res.redirect("/");
});

router.get("/dark", (req, res) => {
    res.cookie("theme", "dark");
    res.redirect("/");
});

router.get("/reset", (req, res) => {
    res.clearCookie("theme");
    res.redirect("/");
});

module.exports = router;
