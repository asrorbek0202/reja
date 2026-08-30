console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();

// MongoDB chaqirish 
const db = require("./server").db();

// 1. Kirish fayllar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 3. Routing code

app.post("/create-item", (req, res) =>{
  
});

app.get("/", (req, res) => {
res.render("reja");
});


app.get("/author", function (req, res) {
  res.render("author", {user: user});
});

module.exports = app;