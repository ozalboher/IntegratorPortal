require('dotenv').config();
const express = require('express'); 
const app = express();
const cors = require('cors');
const { run } = require('./mongo');

const {verify} = require('./utils/jwt'); 

app.set('view engine', 'ejs'); // we set the view engine to ejs so we can use it in the res.render() function
app.use(cors({
    origin: '*'
}))

app.use(express.json()); // app.use is a middleware function that will be executed for every request to the app.

//////
// In the future we will add a middleware here,
// to verify the token and check if the user is authenticated to access certain routes.
//////

app.use('/users', require('./routes/users.route'));
/* app.use('/labs', require('./routes/labs.route')); */


app.use((error, req, res, next) => { // error handling middleware function 
    res.status(500).send(error);
})

app.listen(4000, () => { 
    console.log('Express is running on port 4000');
})
