const express=require('express')
const{Signup,login,userUpdate,deleteUser,resetUserPassward,resetPassward}=require('../controllers/user')
const userRoutes=express.Router()


userRoutes.post("/signup",Signup)
userRoutes.post("/login",login)
userRoutes.put("/userUpdate/:id",userUpdate)
userRoutes.delete("/deleteUser/:id",deleteUser)
userRoutes.post("/resetUserPassward",resetUserPassward)
userRoutes.put("/resetPassword/:id",resetPassward)
module.exports=userRoutes