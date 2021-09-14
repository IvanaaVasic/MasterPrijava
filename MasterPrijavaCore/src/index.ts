import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql'

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(4000, err=>{
    if(err){
        return console.error(err);
    }
    return console.log("App is running...")
});

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "ickaa",
    password: "pass",
    database: "masterprijava"
}) ;

connection.conect();

app.get('/',(req, res) =>{
    res.send("Zdravo!")
})