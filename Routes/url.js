const express = require("express");
const { createURL, fetchURL,getAnalytics } = require("../Controller/url");

const router = express.Router();

console.log("R");

//create url
router.route("/").post(createURL);

//fetch URL
router.route("/:id").get(fetchURL);

//fetch analytics
router.route('/URL/analytics/:id').get(getAnalytics);

module.exports = router;
