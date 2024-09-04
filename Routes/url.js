const express = require("express");
const { createURL, fetchURL, getAnalytics } = require("../Controller/url");

const router = express.Router();

//create url
router.route("/").post(createURL);

//fetch URL
router.route("/:id").get(fetchURL);

//fetch analytics
router.route("/analytics/:id").get(getAnalytics);

module.exports = router;
