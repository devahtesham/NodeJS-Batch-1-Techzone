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
const userModel = require("./model/userSchema");

// db connectivity

const BASE_URI = `mongodb+srv://firebasedb3301:techzoneLearning42101@cluster0.irupuhi.mongodb.net/NOTES`
mongoose
    .connect(BASE_URI)
    .then((res) => console.log("MongoDB connect"))
    .catch((error) => console.log("DB error"))
/*
HTTP METHODS:-
1. GET
2. POST
3. PUT
4. DELETE
*/

// body parser
app.use(express.json())

// ceate our first API 
// testing
app.get("/api/sample",(request,response)=>{
    console.log("API Hit successfully ...");
    response.send("API Hit...")
})

// ==================== start: SIMPLE APIS ============


//GET
app.get("/api/user",(request,response)=>{
    console.log("Api Hit succeessfully!!");
    response.send("Dont Hit my server !")
})

//POST
// in post request we get a body
app.post("/api/user",(request,response)=>{
    console.log(request.body);
    response.send("User ceated Successfully !")
})

// get using param
app.get("/api/newUser/:id",(request,response)=>{
    const {id} = request.params
    conso
})

//put
// app.put("/api/user",(request,response)=>{
//     console.log(request.body);
//     response.send("User Updated Successfully !")
// })

// // for parameter
// app.get("/api/users/:id",(request,response)=>{
//     let myobj = [
//         {id:1,name:"ali",age:20},
//         {id:2,name:"hassan",age:22},
//         {id:3,name:"aslam",age:23},
//     ]
//     const {id} = request.params

//     const filteredUser = myobj.filter((user)=>{
//         if(user.id == id){
//             return user

//         }
//     })


//     response.json({
//         message:"Users get sucesfully",
//         data:filteredUser
//     })
    

// })
// // for query parameter
// app.get("/api/users",(request,response)=>{
//     const {id} = request.query
//     let myobj = [
//         {id:1,name:"ali",age:20},
//         {id:2,name:"hassan",age:22},
//         {id:3,name:"aslam",age:23},
//     ]

//     const filteredUser = myobj.filter((user)=>{
//         if(user.id == id){
//             return user

//         }
//     })


//     response.json({
//         message:"Users get sucesfully",
//         data:filteredUser
//     })
    

// })

// // delete
// app.delete("/api/user/:id",(request,response)=>{
//     const {id} = request.params
//     response.json({
//         message:"user delete",
//         data:id
//     })
// })

// ==================== end: SIMPLE APIS ============

// ==================== start: CRUD APIS ============
app.post("/api/userData",(request,response)=>{
    const body = request.body
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
// ==================== end: CRUD APIS ============



// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))