//Requires JWT Token library
const jwt = require('jsonwebToken')
//Requires secret key
require('dotenv').config()

module.exports = async (req, res, next) => {
    try{
        //Store user's JWT token as 'jwtToken' in request header
        const jwtToken = req.header('token');
        
        //No JWT Token :(
        if(!jwtToken){
            return res.status(403).json('Not authorized');
        }

        //Verifies the JWT token and the secret key
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        //If verified, will return payload that we can use in our routes (payload created in 'jwtGenerator.js')
        req.user = payload.user;

        next();
        
    } catch(err){
        console.error(err.message);
        //Incorrect JWT Token
        return res.status(403).json('Not authorized');
    }
}