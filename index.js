const express = require("express");
require("dotenv").config();

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ Welcome: "Karen's First Deployed API" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n api running on ${port}\n`));
