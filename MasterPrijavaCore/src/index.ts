import express from 'express';

const app = express();
app.listen(4000, err=>{
    if(err){
        return console.error(err);
    }
    return console.log("App is running...")
});


app.get('/',(req, res) =>{
    res.send("Zdravo!")
})