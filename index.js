const express=require ("express");
const {connectMongoDB}=require("./MongoDBConnection");

const app=express();

//connection
connectMongoDB('mongodb://localhost:27017/url_shortner').then(()=>console.log("MongoDB connected"));


//routes
app.get('/',(req,res)=>{
    res.send("Hello from route");
})

const PORT=8001;
app.listen(PORT,()=>{
    console.log("Listening to port 8001");
})