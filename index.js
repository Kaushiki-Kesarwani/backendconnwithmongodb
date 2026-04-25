const express = require('express');
const connectDB = require('./db');
const route = require('./app')
const port = 8000;

const app = express();
app.use(express.json());

connectDB();

app.use('/app',route)

app.get('/',(req,res)=>{
    res.send("server is running");
});

app.listen(port,()=>{
    console.log(`app is listening at ${port} port`);
})