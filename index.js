//node server
const nodeserver = require("http");
const nodeport = 8000;
nodeserver
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("<p>Welcome to node server</p>");
      res.end();
    } else {
      res.write("404! Could not connect to server");
      res.end();
    }
  })
  .listen(nodeport, () =>
    console.log(`Node server running on port ${nodeport}`)
  );

// express server
const express = require("express");
const app = express();
const expressport = 8001;

app
  .get("/", (req, res) => res.send("Welcome to Express server!"))
  .listen(expressport, () =>
    console.log(`Express server is running on port ${expressport}!`)
  );
