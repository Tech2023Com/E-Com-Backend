const ProductsSchema =  require('../Schemas/ProductsSchema')



exports.addProduct  = (req,res) =>{
    const {p_name , category ,  specifications , images, description , quantity , price} = req.body
    console.log(specifications)
    console.log(typeof specifications)
    ProductsSchema.insertMany({p_name : p_name , category : category ,   specifications : specifications ,  images : images , description : description , quantity : quantity , price : price}).then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(400).send(err)
    })

}

