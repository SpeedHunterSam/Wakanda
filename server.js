const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config"); // for keeping mongoDB login cred & JWT



const app = express();

//Bodyparser MiddleWare

app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to mongoDB

mongoose.connect(db,{useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true})
.then(() => console.log("mongoDB Connected"))
.catch(err => console.log(err));

//use Routes

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));


//static assets for production


if(process.env.NODE_ENV === "production"){
    //set static folder
    app.use(express.static("client/build"));
    
    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

