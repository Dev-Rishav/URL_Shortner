const express=require ("express");
const {connectMongoDB}=require("./MongoDBConnection");
const fs=require("fs");

const app=express();

//connection
connectMongoDB('mongodb://localhost:27017/url_shortner').then(()=>console.log("MongoDB connected"));

//* custom middleware (This is where log will be created for the clicks/visits in the page) 
app.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n${Date.now()} ${req.ip} ${req.method}: ${req.path}`,(err,data)=>{
        next();
    })
})

//routes
app.get('/',(req,res)=>{
    res.send("Hello from route");
})

const PORT=8001;
app.listen(PORT,()=>{
    console.log("Listening to port 8001");
})