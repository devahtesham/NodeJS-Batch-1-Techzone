// const jwt = require("jsonwebtoken")

// const middlewares = {
//     authMiddleware : (req,res,next)=>{

//         const token = req.headers.authorization.split(" ")[1]
//         const isUser = jwt.verify(token,"UserLoginTokenKey")
//         console.log(isUser);
//         if (isUser){
//             next()
//         }else{
//             res.json({
//                 message:"Please Login again !"
//             })
//         }
        
//     }
// }
// module.exports = middlewares