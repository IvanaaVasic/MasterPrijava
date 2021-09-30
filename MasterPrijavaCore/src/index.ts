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
app.get("/getKorisnici", (req, res) => {
  connection.query("SELECT * FROM korisnici", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.post("/login", (req, res) => {
  console.log(req.body.username, req.body.password);

  // Zovemo bazu
  // pitamo queryjem bazu da li ovaj username i password iz 'req.body'ja odgovara nekom u bazi
  // ako baza vrati 1 rezultat (i.e. nasao je 1 korisnika sa tacnim user/pass)
  // onda tog nadjenog korisnika zelimo da vratimo frontendu kao response
  // vracamo sve bitne podatke za tog korisnika (id, username, tip_korisnika)

  //   const result = connection.query(
  //     "select * from users where username = ? and password = ?",
  //     [req.body.username, req.body.password]
  //   );

  //   if (result.count === 1) {
  //     const responseData = {
  //       /* ovde idu ti bitni korisnicki podaci */
  //     };
  //     res.send(responseData);
  //   }
});

app.get("/", (req, res) => {
  res.send("Zdravo!");
});
