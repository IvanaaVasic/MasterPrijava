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
  const { username, password } = req.body;
  if (username && password) {
    connection.query(
      "SELECT * FROM korisnici WHERE KorisnickoIme = ? AND Lozinka = ?",
      [username, password],
      (err, result) => {
        if (err) throw err;
        if (result.length === 1) {
          res.send(result[0]);
        }
      }
    );
  }
});

app.put("/posaljiPrijavu", (req, res) => {
  const {
    Id,
    ImePrezime,
    Indeks,
    Modul,
    IdRukovodioca,
    Rukovodilac,  //izbaciti
    RukovodilacAngazovan,
    RukovodilacPredmet,
    NaslovSrb,
    NaslovEng,
    PredlogMentor,
    PredlogDrugiClan,
    PredlogTreciClan,
    Biografija,
    Cilj,
    Sadrzaj,
    Predmet,
    Oblast,
    OcekivaniRezultat,
    studentId, 
  } = req.body;

  connection.query(
    `INSERT INTO prijava (
      
      ImePrezime,
      Indeks,
      Modul,
      IdRukovodioca,
      Rukovodilac,
      RukovodilacAngazovan,
      RukovodilacPredmet,
      NaslovSrb,
      NaslovEng,
      PredlogMentor,
      PredlogDrugiClan,
      PredlogTreciClan,
      Biografija,
      Cilj,
      Predmet,
      Oblast,
      OcekivaniRezultat,
      studentId
      ) VALUES (
       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )`,
    [
      ImePrezime,
      Indeks,
      Modul,
      IdRukovodioca,
      Rukovodilac,
      RukovodilacAngazovan,
      RukovodilacPredmet,
      NaslovSrb,
      NaslovEng,
      PredlogMentor,
      PredlogDrugiClan,
      PredlogTreciClan,
      Biografija,
      Cilj,
      Predmet,
      Oblast,
      OcekivaniRezultat,
      studentId,
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result.affectedRows);
      res.send();
    }
  );
});

//Prijave koje su popunili studenti dohvatamo i dajemo mentoru podatke na uvid
app.get("/prijave", (req, res) => {
  connection.query("SELECT * FROM Prijava", [], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/mentori", (req, res) => {
  connection.query("SELECT Id, Ime FROM korisnici WHERE Tip='mentor'", [], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
