const express = require("express");
const app = express();

app.listen(8080, ()=>{
    console.log("app.listening on port : 8080");
});

app.use((req, res, next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.responseTime, req.hostname);
    next();
});

app.get("/",(req,res)=>{
    res.send("response sended");
});

app.get("/random", ( req, res)=>{
    res.send("respnse sended");
});

