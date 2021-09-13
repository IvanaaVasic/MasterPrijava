"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen(4000, err => {
    if (err) {
        return console.error(err);
    }
    return console.log("App is running...");
});
app.get('/', (req, res) => {
    res.send("Zdravo!");
});
//# sourceMappingURL=index.js.map