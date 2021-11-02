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
    ImePrezime,
    Indeks,
    Modul,
    IdRukovodioca,
    Rukovodilac, //izbaciti
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
    StudentId,
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
      StudentId,
      Pregledano
      ) VALUES (
       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0
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
      StudentId,
    ],
    (err, result) => {
      if (err) throw err;
      res.send();
    }
  );
});

app.put("/izmeniPrijavu", (req, res) => {
  const {
    Id,
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
    StudentId,
  } = req.body;

  connection.query(
    `UPDATE prijava SET
      ImePrezime = ?,
      Indeks = ?,
      Modul = ?,
      IdRukovodioca = ?,
      Rukovodilac = ?,
      RukovodilacAngazovan = ?,
      RukovodilacPredmet = ?,
      NaslovSrb = ?,
      NaslovEng = ?,
      PredlogMentor = ?,
      PredlogDrugiClan = ?,
      PredlogTreciClan = ?,
      Biografija = ?,
      Cilj = ?,
      Predmet = ?,
      Oblast = ?,
      OcekivaniRezultat = ?,
      StudentId = ?,
      Pregledano = 0
      WHERE Id = ?`,
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
      StudentId,
      Id,
    ],
    (err, result) => {
      if (err) throw err;
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

app.get("/prijava", (req, res) => {
  const { id } = req.query;
  connection.query("SELECT * FROM Prijava WHERE Id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

app.get("/prijavaByStudent", (req, res) => {
  const { studentId } = req.query;
  connection.query("SELECT * FROM Prijava WHERE StudentId = ?", [studentId], (err, result) => {
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

app.put("/komentar", (req, res) => {
  const { id, komentar } = req.body;

  connection.query(
    `UPDATE prijava SET KomentarMentora = ?, Pregledano = 1 WHERE Id = ?`,
    [komentar, id],
    (err, result) => {
      if (err) throw err;
      res.send();
    }
  );
});
