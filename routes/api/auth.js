const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth")

//User Model
const User = require("../../models/User");

// post request to api/auth
//authenticate user

router.post("/", (req, res) => {
    const {email, password } = req.body;
    
    //validation
    if(!email || !password) {
        return res.status(400).json({msg: "Please enter all fields"})
    }

    //check for existing user
    User.findOne({email})
    .then(user =>{
        if(!user) return res.status(400).json({msg: "user does not exist"});

        //validate password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({msg :"invalid creditials"});

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
});


// get request to api/auth/user
//get user data (private)

router.get("/user", auth, (req, res) => {

    User.findById(req.user.id)
        .select("-password")
        .then(user => res.json(user));

});



module.exports = router;