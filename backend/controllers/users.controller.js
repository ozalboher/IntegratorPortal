const { getAllUsersService } = require("../services/users.service");

const getAllUsers = async (req, res, next) => {
  console.log("getAllUsers");
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
