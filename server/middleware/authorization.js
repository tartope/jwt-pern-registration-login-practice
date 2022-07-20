const jwt = require('jsonwebToken')
require('dotenv').config()

module.exports = async (req, res, next) => {
    try{
        //Store user's JWT token as 'jwtToken'
        const jwtToken = req.header('token');
        
        //No JWT Token :(
        if(!jwtToken){
            return res.status(403).json('Not authorized');
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;

        next();
        
    } catch(err){
        console.error(err.message);
        //Incorrect JWT Token
        return res.status(403).json('Not authorized');
    }
}