require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

async function fetchData(req, res) {
  const allData = await axios
    // .get("http://localhost:4567/data")
    .get(process.env.JSON_SERVER_PATH_ || 'http://localhost:4567' + '/data')

    .then(res => res.data);
  if (allData) {
    res.status(200).send(allData);
  }
}

module.exports = fetchData;
