const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    uname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    }
})

module.exports=new mongoose.model("User",userSchema)