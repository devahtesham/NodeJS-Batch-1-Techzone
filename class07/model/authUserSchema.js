const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email_address:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile_number:{
        type:String
    },
    created_on:{
        type:Date,
        default:Date.now
    }
})
const authUserModel = mongoose.model('authUsers',schema)
module.exports = authUserModel