const express = require('express')
const router = express.Router()

const { createProduct, updateProduct} = require('../controllers/productController')

router.post('/create-Product',createProduct)
router.put('/update-product/:productId',updateProduct)

module.exports = router