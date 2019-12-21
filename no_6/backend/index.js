const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
var bodyParser = require("body-parser");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "count"
});

connection.connect(err => {
  if (err) throw err;
  console.log("database connected");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/caleg", (req, res) => {
  connection.query(`SELECT * FROM tb_caleg`, (err, result) => {
    if (err) return res.send(err);
    return res.json({ data: result });
  });
});

app.post("/caleg/:id", (req, res) => {
  console.log(req.body);
  console.log("hiya");
  var UPDATEQUERY = `UPDATE tb_caleg SET earned_vote = ${req.body.earned_vote +
    1} where id=${req.body.id}`;
  connection.query(UPDATEQUERY, (err, result) => {
    if (err) console.log(err);
    res.json("Order updated!");
  });
});

app.listen(4001, () => {
  console.log("server berjalan di port 4001");
});
