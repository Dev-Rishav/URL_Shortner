const modelURL = require("../Models/urlScehma");

async function createURL(req, res) {
  const body = req.body;
  if (!body || !body.url)
    return res.status(400).json({ error: "field missing" });
  try {
    const newUrl = await modelURL.create({
      url: body.url,
      userVisit: 1,
    });
    console.log("url created: ", newUrl);
    return res.status(201).json({
      success: "URL shortened",
      link: `http://localhost:8001/${newUrl._id}`,
    });
  } catch (e) {
    console.log("error creating url: ", e);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}

async function fetchURL(req, res) {
  //TODO write fetch URL function to fetch link from the database and return it
  res.send("gg haha");
}

async function getAnalytics(req, res) {
  //TODO write this function to fetch the analytics for the given url
}

module.exports = {
  createURL,
  fetchURL,
  getAnalytics,
};
