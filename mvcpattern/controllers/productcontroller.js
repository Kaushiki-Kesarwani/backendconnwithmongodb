const Product = require('../models/productmodel')

//business logic

const getProducts = async(req,res)=>{
    try{
        const allProducts =await Product.find();

        res.status(200).json(allProducts)
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


const createProducts = async(req,res)=>{
    try{
        const{name,price,description,category} = req.body;
        const newproduct = new Product({name,price,description,category});
        await newproduct.save();
        res.status(200).json(newproduct)

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
    }
} 

const updateProducts = async(req,res)=>{
    try{
        const {id} = res.params;
         const{name,price,description,category} = req.body;
         const updateproduct = await Product.findByIdAndUpdate(id,{name,price,description,category}) 
 res.status(200).json(updateproduct)


    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        });
    }
}

module.exports = {getProducts}
module.exports = {createProducts}