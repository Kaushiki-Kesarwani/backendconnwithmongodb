const Product = require('../models/productmodel')

//business logic

const getProducts = async(req,res)=>{
    try{
        const allProducts =await Product.find();
        if(!allProducts || allProducts.length === 0){
            res.json({
                message:"There is no Product"
            })
        }

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
    }
}

module.exports = {getProducts}