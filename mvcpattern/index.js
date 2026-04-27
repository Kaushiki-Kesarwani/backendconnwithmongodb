const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productroutes')
const app = express();

dotenv.config();
const port = process.env.PORT

connectDB();
app.get('/',(req,res)=>{
res.send("hello world");
});

app.use('/api',productRoutes);
app.listen(port,()=>{
    console.log(`Product is listening at ${port} port.`)
})