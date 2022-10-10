const express = require("express");
require("./db/conn");
const User = require("./models/Users");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello from the other side");
})



app.post("/Users", async (req, res) => {

    try {
        const user = new User(req.body);

        const createuser = await user.save();
        res.status(201).send(createuser);
    } catch (e) {
        res.status(400).send(e);
    }


})


// read data of users

app.get("/Users", async (req, res) => {
    try {
        const usersdata = await User.find();
        res.send(usersdata);
    } catch (e) {
        res.send(e);
    }
})


// get the data of individually using id
app.get("/Users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const userdata = await User.findById(_id);
       
        if(!userdata){
            return res.status(404).send();
        }else{
            res.send(userdata);
        }
    } catch (e) {
        res.send(e);
    }
})

// delete user data using id
app.delete("/Users/:id", async (req, res) => {
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);
       
        if(!req.params.id){
            return res.status(404).send();
        }else{
            res.send(deleteuser);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
