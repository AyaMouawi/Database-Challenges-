const express = require("express");
const app = express();
const port = 5000;


const cors = require("cors");
app.use(cors());


app.get("/api", (req, res) => {
  console.log(`Received a request at http://localhost:${port}/api`);
  res.send("This is working!");
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});