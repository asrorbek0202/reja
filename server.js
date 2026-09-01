
const mongodb = require("mongodb");
const http = require("http");

// let db;
const connectionString = "mongodb+srv://asrorbek:Steve2710@cluster0.bbubr7d.mongodb.net/Reja";  // 1-savol

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB:", err);
    } else {
      console.log("MongoDB connection succeeded");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);