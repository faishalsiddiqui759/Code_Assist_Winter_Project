const express = require("express");
const app = express();

app.listen(8080, ()=>{
    console.log("app.listening on port : 8080");
});

app.use("/api", (req, res, next)=>{
   let {token} = req.query;
   if(token === "giveaccess"){
    next();
   }else{
    res.send("access denied");
   }
});

app.get("/api",(req,res)=>{
    res.send("data sended");
});



