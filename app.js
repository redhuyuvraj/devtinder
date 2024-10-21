// console.log("starting a new project")

const express = require("express");


const app = express();

app.use("/" , (req , res)=> {
    res.send("mai hi hu");
});

app.use("/hello" , (req , res)=>{
    res.send(" vidvondfvm ");
});


app.listen(3000 , ()=> {
    console.log("hii i am running ");
});