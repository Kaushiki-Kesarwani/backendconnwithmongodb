const express = require('express')
const router = express.Router();
const {getProducts} = require('../controllers/productcontroller')
const {createProducts} = require('../controllers/productcontroller') 

router.get('/products',getProducts);

router.put('/products/:id',createProducts);


module.exports = router