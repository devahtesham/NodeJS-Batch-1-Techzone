const express = require("express");  //import 
const app = express()                // initialize
const PORT = 5000;
const mongoose = require("mongoose");
const cors = require("cors")
const userModel = require("./model/authUserSchema");
const authUserModel = require("./model/authUserSchema");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const middlewares = require("./middlewares/index.js")
const router  = require("./routes/routes")
// const middlewares = require("./middlewares");

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

app.use("/api",router)

// // signup API
// app.post("/api/signup",async(request,response)=>{
//     const {name,emailAddress,password,mobileNumber} = request.body;
//     if (!name || !emailAddress || !password){
//         response.json({
//             messsage:"Required Fields are missing !"
//         })
//     }else{
//         // password hashing 
//         const hashedPassword = await bcrypt.hash(password,10);
//         authUserModel.findOne({email_address:emailAddress})
//             .then((user)=>{
//                 if(user){
//                     response.json({
//                         message:"Email address already in use !",
//                     })
//                 }else{
//                     const objToSend = {
//                         ...request.body,
//                         email_address:emailAddress,
//                         mobile_number:mobileNumber,
//                         password:hashedPassword
//                     }
//                     // sending data on db 
//                     authUserModel.create(objToSend)
//                     .then((res)=>{
//                         response.json({
//                             message:"User Signup Successfully !",
//                             status:true
//                         })
//                     })
//                     .catch((error)=>{
//                         response.json({
//                             message:`Error:- ${error}`,
//                         })
//                     })
//                 }
//             })
//             .catch((error)=>{
//                 console.log(error);
//             })

//     }


// })

// // login API
// app.post("/api/login",(request,response)=>{
//     const {emailAddress,password} = request.body

//     // to check whether user has signup r not 
//     authUserModel.findOne({email_address:emailAddress})
//         .then(async(user)=>{
//             if (user){
//                 // password match
//                 const isPasswordMatch = await bcrypt.compare(password,user.password)
//                 if(!isPasswordMatch){
//                     response.json({
//                         message:"Credentials Error !"
//                     })
//                     return
//                 }else{
                
//                     const tokenObj = {
//                         ...user
//                     }
//                     const token = jwt.sign(tokenObj,"UserLoginTokenKey")
//                     response.json({
//                         message:"user Login Succcessfully !",
//                         status:true,
//                         data:user,
//                         token,
                        

//                     })
//                 }

//             }else{
//                 response.json({
//                     message:"User Not Found !"
//                 })
//                 return
//             }   
//         })
//         .catch((error)=>{
//             response.json({
//                 message:`Error:- ${error}`
//             })
//         })
// })

// // =========== middlewares ===========
// app.get("/api/postCreate",middlewares.authMiddleware,(request,response)=>{
//     response.json({
//         message:"Post Created Successfully !!"
//     })
// })
// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))