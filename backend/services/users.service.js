const { run } = require("./mongo");

const getAllUsersService = async () => {
  let db; // Declare db outside the try block so it can be accessed in the finally block

  try {
    // Connect to the "portal" database using the 'run' function
    db = await run();

    // Access the "users" collection and retrieve all documents
    const users = await db.collection("users").find({}).toArray();
    return users;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection in the finally block to ensure it is always closed
    if (db) {
      await db.client.close();
    }
  }
};




module.exports = { getAllUsersService };