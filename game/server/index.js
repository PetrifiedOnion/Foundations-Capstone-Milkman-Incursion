require("dotenv").config()
const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const { login, register} = require("./controllers/auth");
function moo(req, res){
    res.send("moo")
}
app.post(`/api/login`, login);
app.post(`/api/register`, register);
app.get("/api/moo", moo);

app.listen(3456, ()=>{
    console.log("SERVER CONNECTED ON 3456")
})


