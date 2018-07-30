const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.use("/static", express.static(__dirname + "/static"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
