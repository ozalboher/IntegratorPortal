const express = require('express');
const route = express.Router();
console.log('users.route.js');
const { getAllUsers } = require('../controllers/users.controller.js');

route.get('/', getAllUsers);

module.exports = route;