const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
const User = require("../../models/User");

// post request to api/users
//register new User

router.post("/", (req, res) => {
    const { name, email, password } = req.body;
    
    //validation
    if(!name || !email || !password) {
        return res.status(400).json({msg: "Please enter all fields"})
    }

    //check for existing user
    User.findOne({email})
    .then(user =>{
        if(user) return res.status(400).json({msg: "user already exists"});

        const newUser = new User({
            name,
            email,
            password
        });

        //create hashed password then save hashed password to DB
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {

                        jwt.sign(
                            {id: user.id},
                            config.get("jwtSecret"),
                            {expiresIn: 172800},
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user:{
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            }
                        )


                    })
            })
        })
    })
});


module.exports = router;