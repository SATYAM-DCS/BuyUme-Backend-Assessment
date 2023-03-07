const productModel = require('../models/productModels')
module.exports = {

createProduct: async(req,res)=>{

    try{
        let { quantity} = req.body

        if(!quantity){
            return res.status(400).send({status:false,message:`Quantity is essesntial`})
        }
        let saveData = await productModel.create(req.body)

        return res.status(200).send({status:true,message:'product created successfully',Product:saveData})
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }


},

updateProduct: async(req,res)=>{

    try{
        let {productId} = req.params
        if(productId != req.productId){
            return res.status(403).send({status:false,message:'productID is not valid'})
        }
        let{quantity,operation} =req.body
        if(operation == 'add'){

            let updateData = await productModel.findOneAndUpdate({productId:productId, _id:productId},{$inc:{quantity:(+quantity)},updateAt:new Date().toLocaleString()})
            return res.status(200).send({status:true,message:"quantity updated successfully",Product:updateData})
        }else{
            let updateData = await productModel.findOneAndUpdate({productId:productId, _id:productId},{$inc:{quantity:(-quantity)},updateAt:new Date().toLocaleString()})
            return res.status(200).send({status:true,message:"quantity updated successfully",Product:updateData})
        }
        
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}


}