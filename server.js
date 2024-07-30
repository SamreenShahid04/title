require('dotenv').config()
const express=require('express')
const app=express()
const port =process.env.PORT||6700
const db=require('./db/db')
const userRoutes=require('./routers/user')
db()


app.use(express.json())


app.use("/api/v1", userRoutes)

app.listen(port,()=>{
    console.log(`server is started at ${port}`)
})

