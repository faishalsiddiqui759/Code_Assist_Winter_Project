const express = require("express");
const app = express();

let port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.use((req, res, next)=>{
    console.log("1st middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("2nd middleware");
    next();
});

app.get("/", (req, res)=>{
    res.send("1 response");
});

app.get("/get", (req, res)=>{
    res.send("2nd response");
});
