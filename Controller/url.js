const modelURL = require("../Models/urlScehma");

async function createURL(req, res) {
  //TODO: if the url already exists then update the visit count
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
  // function to fetch link from the database and return it
  const id = req.params.id;

  try {
    const urlObj = await modelURL.findById(id);

    if (!urlObj) {
      return res.status(404).json({ error: "URL not found" });
    }
    //update visit count
    urlObj.userVisit = urlObj.userVisit+1;
    await modelURL.findByIdAndUpdate(urlObj._id,urlObj);
    // Redirect to the original URL
    return res.redirect(urlObj.url);
  } catch (error) {
    console.error("Error fetching URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAnalytics(req, res) {
  //TODO write this function to fetch the analytics for the given url
}

module.exports = {
  createURL,
  fetchURL,
  getAnalytics,
};
