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
    const { Id, ImePrezime, Indeks, Modul, IdRukovodioca, Rukovodilac, //izbaciti
    RukovodilacAngazovan, RukovodilacPredmet, NaslovSrb, NaslovEng, PredlogMentor, PredlogDrugiClan, PredlogTreciClan, Biografija, Cilj, Sadrzaj, Predmet, Oblast, OcekivaniRezultat, studentId, } = req.body;
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
      studentId
      ) VALUES (
       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
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
        studentId,
    ], (err, result) => {
        if (err)
            throw err;
        console.log(result.affectedRows);
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
app.get("/mentori", (req, res) => {
    connection.query("SELECT Id, Ime FROM korisnici WHERE Tip='mentor'", [], (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
});
//# sourceMappingURL=index.js.map