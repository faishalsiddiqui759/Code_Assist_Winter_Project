const express = require("express");
const app = express();
const path = require("path");
const{ v4: uuidv4 } = require("uuid");

let port = 8080;

app.use(express.urlencoded({extended : true}));

app.set("views engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port , ()=>{
    console.log("app is listening on port", port);
});

let posts = [
    {   id: uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },
    {   id: uuidv4(),
        username: "faishal siddiqui",
        content: " hard working for constantly"
    },
    {   id: uuidv4(),
        username: "rahul yadav",
        content: "you will be succes if you do hard working"
    }
];


app.get("/posts", (req, res)=>{
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    let {username, content} = req.body;
    let {id} = uuidv4();
    posts.push({ id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("shows.ejs", {post});
});