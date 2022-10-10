const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mishra:mishra786@cluster0.yrprxjp.mongodb.net/mern1r?retryWrites=true&w=majority" ).then(() => {
    console.log("connection is succesfull");
}).catch((e) => {
    console.log(e);
})