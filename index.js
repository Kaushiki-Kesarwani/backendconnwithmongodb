const express = require('express');
const app = express();

const port = 8000;

app.get('/',(req,res)=>{
    res.send("server is running");
});

app.listen(port,()=>{
    console.log(`app is listening at ${port} port`);
})