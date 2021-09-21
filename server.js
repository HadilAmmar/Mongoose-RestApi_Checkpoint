var express=require("express");
var app = express();
require('dotenv').config()

const DBconnect=require("./config/DBconnect");
DBconnect()

app.use(express.json());
app.use("/User", require('./routes/User'));



app.listen(process.env.PORT, (error)=> {
    error
    ? console.log(`server mza7af${error}`)
    : console.log(`server yemshi ${process.env.PORT}`)
});