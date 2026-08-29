console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

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


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running on port ${PORT}, http://localhost:${PORT}`);
});