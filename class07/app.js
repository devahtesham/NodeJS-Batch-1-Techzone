/*
    TYPES OF API:-
    1. public
    2.private/protected
    3. partner
    4. composite

*/


const express = require("express");  //import 
const app = express()                // initialize
const PORT = 5000;
const mongoose = require("mongoose");
const cors = require("cors")
const userModel = require("./model/authUserSchema");
const authUserModel = require("./model/authUserSchema");

// db connectivity

const BASE_URI = `mongodb+srv://firebasedb3301:techzoneLearning42101@cluster0.irupuhi.mongodb.net/NOTES`
mongoose
    .connect(BASE_URI)
    .then((res) => console.log("MongoDB connect"))
    .catch((error) => console.log("DB error"))


// cors initialization
app.use(cors())
// body parser
app.use(express.json())

// ceate our first API 
// testing
app.get("/api/sample",(request,response)=>{
    console.log("API Hit successfully ...");
    response.send("API Hit...")
})
// signup API
app.post("/api/signup",(request,response)=>{
    const body = request.body
    
    // authUserModel.create()

})

// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))