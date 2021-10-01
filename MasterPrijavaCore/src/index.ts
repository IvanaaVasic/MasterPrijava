import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log("App is running...");
});

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "ickaa",
  password: "pass",
  database: "masterprijava",
});

connection.connect();

// queries CRUD (create, read, update, delete)

//Primer za get request sa BankAppa

// app.get("/getKorisnici", (req, res) => {
//   connection.query("SELECT * FROM korisnici", (err, rows) => {
//     if (err) throw err;
//     res.json(rows);
//   });
// });

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username && password) {
    connection.query(
      "SELECT * FROM korisnici WHERE KorisnickoIme = ? AND Lozinka = ?",
      [req.body.username, req.body.password],
      (err, result) => {
        if (err) throw err;
        if (result.length === 1) {
          res.send(result[0]);
        }
      }
    );
  }
});

app.get("/", (req, res) => {
  res.send("Zdravo!");
});
