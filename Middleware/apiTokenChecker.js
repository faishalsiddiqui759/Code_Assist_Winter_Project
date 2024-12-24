const express = require("express");
const app = express();

app.listen(8080, ()=>{
    console.log("app.listening on port : 8080");
});

// middleware function stored in a variable and can use on any route
 const checkToken = ("/api", (req, res, next)=>{
   let {token} = req.query;
   if(token === "giveaccess"){
    next();
   }else{
    res.send("access denied");
   }
});

//middleware function used on this route
app.get("/api", checkToken,(req,res)=>{
    res.send("data sended");
});



