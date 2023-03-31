const express = require('express');
const app = express()


app.get('/',(req,res)=>{
    res.send("You Are in correct Route");
})


app.listen(8080,()=>{
    console.log("Server listening on port 8080....");
})