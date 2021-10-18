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

app.put('/posaljiPrijavu', (req, res) => {
  let imePrezime = req.body.imePrezime;
  let brojIndeksa = req.body.brojIndeksa;
  let modul = req.body.modul;
  let rukovodilac = req.body.rukovodilac;
  let naslovCirilica = req.body.naslovCirilica;
  let naslovEngleski = req.body.naslovEngleski;
  let clanKomisije1 = req.body.clanKomisije1;
  let clanKomisije2 = req.body.clanKomisije2;


  connection.query(`INSERT INTO prijava VALUES (${imePrezime}, ${brojIndeksa}, ${modul}, ${rukovodilac},` +
   `${naslovCirilica}, ${naslovEngleski}, ${clanKomisije1}, ${clanKomisije2})`)
      [req.body.imePrezime, req.body.brojIndeksa, req.body.Modul,
      req.body.rukovodilac, req.body.naslovCirilica, req.body.naslovEngleski,
      req.body.clanKomisije1, req.body.clanKomisije2], (err, result) => {
          if (err) throw err;
          console.log(result.affectedRows);
      };
});

app.get("/", (req, res) => {
  res.send("Zdravo!");

});