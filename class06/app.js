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
const userModel = require("./model/userSchema");

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

// ==================== start: CRUD APIS ============
// POST
app.post("/api/userData",(request,response)=>{
    const body = request.body
    // console.log(body);
    userModel.create(body)
        .then((res)=>{
            response.json({
                message:"User created Successfully !",
                data:res
            })
        })
        .catch((error)=>{
            response.json({
                message:`error:- ${error}`,
            })
        })
})

//GET
app.get("/api/userData",(request,response)=>{
    // let objToSend = {course:"html"}  // get single user data
    let objToSend = {}               // get al data 

    //find

    userModel.find(objToSend)
        .then((res)=>{
            response.json({
                message:"User Get Successfully !",
                data:res
            })
        })
        .catch((error)=>{
            response.json({
                message:`error:- ${error}`
            })
        })

//     // findOne
//     let objToSend = {course:"html"}
//     userModel.findOne({})
//     .then((res)=>{
//         response.json({
//             message:"User Get Successfully !",
//             data:res
//         })
//     })
//     .catch((error)=>{
//         response.json({
//             message:`error:- ${error}`
//         })
//     })
})

app.get("/api/userData/:id",(request,response)=>{
   const {id} = request.params
    //    console.log(id);
    userModel.findById(id)
    .then((res)=>{
        response.json({
            message:"User Get Successfully !",
            data:res
        })
    })
    .catch((error)=>{
        response.json({
            message:`error:- ${error}`
        })
    })


    
})

//PUT
app.put("/api/userData",(request,response)=>{
    const body = request.body;
    let {course,id,fees} = body;
    userModel.findByIdAndUpdate(id,{course,fees},{new:true})
        .then((res)=>{
            response.json({
                message:"user updated Successfully !",
                data:res
            })
        })
        .catch((error)=>{
            response.json({
                message:`error:- ${error}`
            })
        })
    
})

//DELETE
app.delete("/api/userData/:id",(request,response)=>{
    const {id} = request.params
    userModel.findByIdAndDelete(id)
        .then((res)=>{
            response.json({
                message:"user deleted Successfully !",
                data:res
            })
        })
        .catch((error)=>{
            response.json({
                message:`error:- ${error}`
            })
        })
})
// ==================== end: CRUD APIS ============



// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))