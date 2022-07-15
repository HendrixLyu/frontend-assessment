require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetchData = require("./src/api/fetchData");

const app = express();
// const jsonParser = bodyParser.json();

app.use(cors());

// app.post('/api/register', jsonParser, register)
app.get("/api/data", fetchData);

const Port = process.env.PORT || 7890;

app.listen(Port, () => {
  console.log(`Success! Server start @ http://localhost:${Port}`);
});
