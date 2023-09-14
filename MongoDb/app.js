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



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ayamouawi8:VFlVq62QfvkZEJ5s@cluster0.bzyvclr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
