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
// queries CRUD (create, read, update, delete)
app.get("/getKorisnici", (req, res) => {
    connection.query("SELECT * FROM korisnici", (err, rows) => {
        if (err)
            throw err;
        res.json(rows);
    });
});
// app.post("/login", (req, res) => {
//   console.log(req.body.korisnickoIme, req.body.Lozinka);
//   // Zovemo bazu
//   // pitamo queryjem bazu da li ovaj username i password iz 'req.body'ja odgovara nekom u bazi
//   // ako baza vrati 1 rezultat (i.e. nasao je 1 korisnika sa tacnim user/pass)
//   // onda tog nadjenog korisnika zelimo da vratimo frontendu kao response
//   // vracamo sve bitne podatke za tog korisnika (id, username, tip_korisnika)
//   //   const result = connection.query(
//   //     "select * from users where username = ? and password = ?",
//   //     [req.body.username, req.body.password]
//   //   );
//   //   if (result.count === 1) {
//   //     const responseData = {
//   //       /* ovde idu ti bitni korisnicki podaci */
//   //     };
//   //     res.send(responseData);
//   //   }
// });
app.post("/login", (req, res) => {
    // console.log("Success")
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        connection.query("SELECT * FROM korisnici WHERE KorisnickoIme = ? AND Lozinka = ?", [req.body.username, req.body.password], (err, result) => {
            if (err)
                throw err;
            if (result.length === 1) {
                res.send(result[0]);
                //   res.send(result);
            }
            // console.log(result.affectedRows);
            console.log(result);
            // console.log(req.body.username, req.body.password);
        });
    }
});
app.get("/", (req, res) => {
    res.send("Zdravo!");
});
//# sourceMappingURL=index.js.map