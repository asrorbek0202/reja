console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();

// MongoDB chaqirish 
const db = require("./server").db();
const mongodb = require("mongodb")

// 1. Kirish fayllar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 3. Routing code

app.post("/create-item", (req, res) =>{
  console.log("user entered/ create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
   res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id)},
    function(err, data){
      res.json({state: "success"});
    }
  );
});

app.get("/", (req, res) => {
  console.log("user entered /")
  db.collection("plans").find().toArray((err, data) =>{
    if(err){
      console.log(err);
      res.end("something went wrong");
    }else{
      res.render("reja", {items: data});
    }
  })
});


// app.get("/author", function (req, res) {
//   res.render("author", {user: user});
// });

module.exports = app;