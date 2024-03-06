const express = require('express');
const route = express.Router();

const { getAllUsers } = require('../controllers/users.controller.js');

route.get('/', getAllUsers);

module.exports = route;