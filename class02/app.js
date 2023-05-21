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

// body parser
app.use(express.json())
// ceate our first API 
// testing
app.get("/api/sample",(request,response)=>{
    response.send("API Hit...")
})

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

//put
app.put("/api/user",(request,response)=>{
    console.log(request.body);
    response.send("User Updated Successfully !")
})



// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))