const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/dist", express.static(path.join(__dirname + "/dist")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
