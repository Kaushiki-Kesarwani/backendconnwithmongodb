const express = require('express');
const router = express.Router();

const Task = require('./model');

//CRUD operations
//read

router.get('/users',async(req,res)=>{
try{
    const users = await Task.find();
    res.status(200).json(users);

}catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}
});

//create

router.post('/users', async (req, res) => {
  try {
    const { name, creditedAt } = req.body;

    const newUser = new Task({ name, creditedAt });
    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});





module.exports = router;