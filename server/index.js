//requires the libraries
const express = require("express");
//runs the express library
const app = express();
//requires cors
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());  //req.body object: gets data from the client. gives access to req.body so json data can be retrieved.

//ROUTES//

//register and logins routes
//activates routes
app.use('/auth', require('./routes/jwtAuth'))

//dashboard route
app.use('/dashboard', require('./routes/dashboard'));

//gets the server to start
//'nodemon index' command detects changes in the file and restarts server
app.listen(3000, () => {
    console.log("server has started on port 3000");
});