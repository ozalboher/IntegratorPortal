const { run } = require('./mongo');


const { getAllUsersService } = require("../services/users.service");

const getAllUsers = async (req, res, next) => {
  /* const userId = req.id; */
  try {
    const user = await getAllUsersService();
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
};
