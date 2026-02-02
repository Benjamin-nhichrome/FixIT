require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("FixIT is running ✅");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
const db = require("./src/config/db");

db.query("SELECT 1")
  .then(() => console.log("MySQL connected ✅"))
  .catch(err => console.error("MySQL error ❌", err));
