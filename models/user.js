const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
firstName:{
    type:"string",
    required:"true"
},
lastName:{
    type:"string",
    required:"true"
},
email:{
    type:"string",
    required:"true"
},
passward:{
    type:"string",
    required:"true"
}

})
const data=mongoose.model("user",userSchema)
module.exports=data