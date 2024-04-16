const Users = require("./mock.js");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const config = require("./dbConfig.json");
const { MongoClient, ObjectId } = require("mongodb");
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db("buddysystem");
const userCollection = db.collection("user");
const activityFeed = db.collection("activityfeed");

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

async function getUser(username) {
  console.log("getting user: ", username);
  const user = await userCollection.findOne({ username: username });
  console.log("got user:  ", JSON.stringify(user));
  return user;
}
async function createUser(username, name, email, password, profilePic) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    name: name,
    email: email,
    password: passwordHash,
    profilePic: profilePic,
  };
  await userCollection.insertOne(user);

  return user;
}

async function getGoalsForUser(username) {
  var usr = await getUser(username);
  return usr.goals;
}
async function addGoalForUser(username, goalName, goalFrequency) {
  await userCollection.updateOne(
    { username: username },
    {
      $push: {
        goals: {
          id: ObjectId,
          name: goalName,
          frequency: goalFrequency,
          streak: 0,
        },
      },
    }
  );
  var usr = await getUser(username);
  await userAddedNewGoal(usr, { name: goalName, frequency: goalFrequency });
}

async function getFeed(username) {
  return await activityFeed.find();
}
async function userAddedNewGoal(user, newGoal) {
  const item = {
    user: user.name,
    profilePic: user.profilePic,
    body: `has set a new ${newGoal.frequency} goal to ${newGoal.name}!`,
    dateAdded: new Date(),
  };
  await activityFeed.insertOne(item);
}

function userGotKudos(giver, getter, postId) {
  //this will fill in when we do websockets
}

//buddies functions
// async function getBuddiesForUser(username) {
//   var usr = await getUser(username);
//   return usr.buddies;
// }

module.exports = {
  seedDB,
  getUser,
  createUser,
  getGoalsForUser,
  addGoalForUser,
  userAddedNewGoal,
};
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
