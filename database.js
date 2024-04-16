const Users = require("./mock.js");
const config = require("./dbConfig.json");
const { MongoClient } = require("mongodb");
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db("buddysystem");
const userCollection = db.collection("user");

(async function testConnection() {
  console.log("testing connection");
  await client.connect();
  console.log("connected. waiting for ping");
  await db.command({ ping: 1 });
  console.log("pingyyy");
})().catch((ex) => {
  console.log(
    `Unable to connect to database with ${url} because ${ex.message}`
  );
  process.exit(1);
});

async function seedDB() {
  Users.forEach(async (usr) => {
    const passwordHash = await bcrypt.hash("pass123", 10);
    usr.password = passwordHash;
    await userCollection.insertOne(usr);
  });
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://madisonksharp:LWSCSEodqMulLxD9@cluster0.nsrks2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
