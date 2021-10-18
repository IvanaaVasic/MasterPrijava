"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
app.use(cors_1.default());
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
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        connection.query("SELECT * FROM korisnici WHERE KorisnickoIme = ? AND Lozinka = ?", [req.body.username, req.body.password], (err, result) => {
            if (err)
                throw err;
            if (result.length === 1) {
                res.send(result[0]);
            }
        });
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
        `${naslovCirilica}, ${naslovEngleski}, ${naslovCirilica}, ${clanKomisije1}, ${clanKomisije2})`)[req.body.imePrezime, req.body.brojIndeksa, req.body.Modul,
        req.body.rukovodilac, req.body.naslovCirilica, req.body.naslovEngleski,
        req.body.clanKomisije1, req.body.clanKomisije2], (err, result) => {
        if (err)
            throw err;
        console.log(result.affectedRows);
    };
});
app.get("/", (req, res) => {
    res.send("Zdravo!");
});
//# sourceMappingURL=index.js.map