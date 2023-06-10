const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    course:{
        type:String
    },
    fees:{
        type:Number
    }
})
const userModel = mongoose.model("user",schema)
module.exports = userModel