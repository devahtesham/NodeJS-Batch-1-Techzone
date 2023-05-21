const express = require("express");
const app = express()
const PORT = 5000;

/*
HTTP METHODS:-
1. GET
2. POST
3. PUT
4. DELETE
*/
// ceate our first API
app.get("/api/getuser",(request,response)=>{
    console.log("Api Hit succeessfully!!");
    response.send("Dont Hit my server !")
})

// testing
app.get("/api/sample",(request,response)=>{
    response.send("API Hit...")
})




// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))