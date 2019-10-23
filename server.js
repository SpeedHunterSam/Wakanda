const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const items = require("./routes/api/items");


const app = express();

//Bodyparser MiddleWare

app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI

//Connect to mongoDB

mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log("mongoDB Connected"))
.catch(err => console.log(err));

//use Routes

app.use("/api/items", items);

//static assets for production


if(process.env.NODE_ENV === "production"){
    //set static folder
    app.use(express.static("client/build"));
    
    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


/*
if(process.env.node_ENV === "production"){
    //set static folder
    app.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
   );
}
*/








const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

