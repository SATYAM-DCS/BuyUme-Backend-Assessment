const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({

productId : {
    type : Number,
    required: true
},

quantity:{
    type: Number,
    required: true
},

createdAt:{
    type: String,
    default: new Date().toLocaleString()
},
updatedAt:{
    type : String,
    default: null

}

})
module.exports = mongoose.model('Product', productSchema)