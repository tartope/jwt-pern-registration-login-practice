//to make routes more modular, use routers b/c it allows you to break down routes and combine them all together inside the 'index.js' file.
const router = require('express').Router();
//requires pool from db.js file: can run queries with pg
const pool = require("../db");
//requires bcrypt
const bcrypt = require('bcrypt');
//requires jwtGenerator
const jwtGenerator = require('../utils/jwtGenerator');


//registering
//'post' to add data (add someone new in db)
router.post('/register', async (req, res) => {
    try {
        
        //1. destructure the req.body (name, email, password)
        const { name, email, password } = req.body;

        //2. check if user exists (if user exists then throw error)
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        // means a user already exists (401 = user is unauthenticated, and 403 = user is unauthorized)
        if(user.rows.length !== 0){
            return res.status(401).send('User already exists');
        }

        //if user does exists, use steps 3, 4 and 5
        //3. Bcrypt the user password
        //how encrypted it will be
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        //this gives an encrypted password
        const bcryptPassword = await bcrypt.hash(password, salt);

        //4. enter the new user inside the db
        const newUser = await pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [name, email, bcryptPassword]);  //'RETURNING *' returns the data back to us

        // res.json(newUser.rows[0]);
        
        //5. generate jwt token
        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({ token })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;