const express = require("express");
const app = express();

const {createLog} =require('./Middlewares/url')
const { connectMongoDB } = require("./MongoDBConnection");
const router = require("./Routes/url");


//connection
connectMongoDB("mongodb://localhost:27017/url_shortner").then(() =>
  console.log("MongoDB connected")
);

//* custom middleware (This is where log will be created for the clicks/visits in the page)
app.use(createLog);

//routes
app.use("/", router);

app.get("/:URL/analytics/:id", (req, res) => {
  res.send("hi");
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log("Listening to port 8001");
});
