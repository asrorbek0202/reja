
const http = require("http");
require("dotenv").config(); 
const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;

const PORT = process.env.PORT || 3000;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB",err);
    else {
      console.log("MongoDB connection succeed");

      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
