"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.listen(4000, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log("App is running...");
});
const connection = mysql_1.default.createConnection({
    host: "127.0.0.1",
    user: "ickaa",
    password: "pass",
    database: "masterprijava",
});
connection.connect();
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        connection.query("SELECT * FROM korisnici WHERE KorisnickoIme = ? AND Lozinka = ?", [username, password], (err, result) => {
            if (err)
                throw err;
            if (result.length === 1) {
                res.send(result[0]);
            }
        });
    }
});
app.put("/posaljiPrijavu", (req, res) => {
    const { ImePrezime, Indeks, Modul, IdRukovodioca, Rukovodilac, //izbaciti
    RukovodilacAngazovan, RukovodilacPredmet, NaslovSrb, NaslovEng, PredlogMentor, PredlogDrugiClan, PredlogTreciClan, Biografija, Cilj, Predmet, Oblast, OcekivaniRezultat, StudentId, } = req.body;
    connection.query(`INSERT INTO prijava (
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
      )`, [
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
    ], (err, result) => {
        if (err)
            throw err;
        res.send();
    });
});
//Prijave koje su popunili studenti dohvatamo i dajemo mentoru podatke na uvid
app.get("/prijave", (req, res) => {
    connection.query("SELECT * FROM Prijava", [], (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
});
app.get("/prijava", (req, res) => {
    const { id } = req.query;
    connection.query("SELECT * FROM Prijava WHERE Id = ?", [id], (err, result) => {
        if (err)
            throw err;
        res.send(result[0]);
    });
});
app.get("/mentori", (req, res) => {
    connection.query("SELECT Id, Ime FROM korisnici WHERE Tip='mentor'", [], (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
});
app.put("/komentar", (req, res) => {
    const { id, komentar } = req.body;
    connection.query(`UPDATE prijava SET KomentarMentora = ?, Pregledano = 1 WHERE Id = ?`, [komentar, id], (err, result) => {
        if (err)
            throw err;
        res.send();
    });
});
//# sourceMappingURL=index.js.map