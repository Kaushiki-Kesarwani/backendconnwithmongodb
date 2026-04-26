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

//update
router.put('/users/:id',async(req,res)=>{
  const {id} = req.params;
  const {name,creditedAt} = req.body;
  try{
    const updatedUser = await Task.findByIdAndUpdate(id,{name,creditedAt});
    if(!updatedUser){
      res.json({
        message:"user not found"
      })
    }
    res.status(200).json({
      success:true,
      user:updatedUser,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }

});


//delete
router.delete('/users/:id',async(req,res)=>{
  const {id} = req.params;
  try{
    const deletedUser = await Task.findByIdAndDelete(id);

    if(!deletedUser){
      res.json({
        message:"user not found",
      })
    }

    res.status(200).json({
      success:true,
      user:deletedUser,
    })
  }catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});


module.exports = router;