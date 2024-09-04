const modelURL = require('../Models/urlScehma');


async function createURL(req, res) {
  //TODO write this function to store URL in databse and return its id.
  console.log("req.body");
  
}
async function fetchURL(req, res) {
  //TODO write fetch URL function to fetch link from the database and return it
  res.send("gg haha")
}


async function getAnalytics(req,res) {
    //TODO write this function to fetch the analytics for the given url
}

module.exports = {
  createURL,
  fetchURL,
  getAnalytics
};
