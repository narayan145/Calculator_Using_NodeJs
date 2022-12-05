const express = require('express');
const app = express();
const percentageRoute = require('./routes/percentage');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/home", percentageRoute);
//Listening to server
app.listen(8080, ()=>{
    console.log("Connected to server 8080");
})