const { run } = require('./mongo');

const getAllUsersService = async () => {
  try {
    // Connect to the "portal" database using the 'run' function
    const db = await run();
    // Access the "users" collection and retrieve all documents
    const users = await db.collection('users').find({}).toArray();
    return users;
  } catch (error) {
    console.error('Error:', error);
  }
};

getAllUsersService().then((users) => console.log(users));
