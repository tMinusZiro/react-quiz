const express = require("express");
const app = express();
const path = require("path");
const port = process.envPORT || 5000;
const staticDir = path.resolve("./build");

//set up static file server

//create path to './index.html' page, and use * to direct all paths back to our index.html
app.get("*", (req, res) => {
  res.sendFile(staticDir + "index.html");
});

//tell the express server to listen to console.log inside Node what server it is listening on
app.listen(post, () => console.log(`listening on port${port}`));
