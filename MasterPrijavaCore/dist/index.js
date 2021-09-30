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
app.post("/login", (req, res) => {
    console.log(req.body);
});
app.get("/", (req, res) => {
    res.send("Zdravo!");
});
//# sourceMappingURL=index.js.map