// Core modules:
const path = require("path");

// Third-party modules:
const express = require("express");
const { RSA_NO_PADDING } = require("constants");
const app = express();

// Express configurations:
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Sanity Check...</h1>
  `);
});

app.get("/*", (req, res) => {
  res.send(`
    <h1>404 Error</h1>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
