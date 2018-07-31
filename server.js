const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/dist", express.static(__dirname + "/dist"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
