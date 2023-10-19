require('dotenv').config(); // Configure dotenv to load in the .env file

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // Connect to the database named "portal" (same as the database name in the connection string)
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = await client.db("portal");
    return database;
  } finally {
    // Ensures that the client will close when you finish/error,(best to use for database that is very big and need to close the connection to save resources).
    /* await client.close(); */
  }
}
/* run().catch(console.dir); */

module.exports = {run};