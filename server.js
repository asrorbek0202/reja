console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs")

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err){
    console.log("ERROR", err);
  }else{
    user = JSON.parse(data)
  }
})

// Rejalarni saqlaydigan massiv (Array)
let plans = ["Dasturlashni o'rganish", "Kitob o'qish"];

// 1. Kirish fayllar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 3. Routing code

// READ: Bosh sahifada barcha rejalarni ko'rsatish
app.get("/", function (req, res) {
  res.render("harid", { items: plans });
});

app.get("/author", function (req, res) {
  res.render("author", {user: user});
});

// CREATE: Yangi reja qo'shish
app.post("/create-item", (req, res) => {
  const newItem = req.body.item;
  if (newItem && newItem.trim() !== "") {
    plans.push(newItem.trim());
  }
  res.redirect("/");
});

// DELETE: Rejani o'chirish (ixtiyoriy)
app.post("/delete-item", (req, res) => {
  const index = req.body.index;
  if (index !== undefined) {
    plans.splice(index, 1);
  }
  res.redirect("/");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running on port ${PORT}`);
});