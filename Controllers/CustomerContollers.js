const bcrypt  = require('bcrypt')
const CustomerSchema =  require('../Schemas/CutomerSchema')
const ProductsSchema = require('../Schemas/ProductsSchema')



exports.addCustomer = (req,res) =>{
   const {name , email , mobile , lat , long, house_no , address , password , pincode} =  req.body;


   bcrypt.genSalt(10,function(err,salt){
      if(err)
      {
         res.status(500).send({messgae : "Something Went Wrong"})
      }
      else
      {
         bcrypt.hash(password ,salt ,  function(err , hash){
            if(err)
      {
         res.status(500).send({messgae : "Something Went Wrong"})
      }
      else
      {
         CustomerSchema.insertMany({name:name ,email : email , mobile:mobile , lat: lat , long:long, house_no : house_no , password : hash, address :address , pincode : pincode}).then((result)=>{

            console.log(result)
      
            
      
            res.status(200).send({messgae : "User Created Successfully"})
      
      
         
          
         }).catch((err)=>{
           if(err.code == 11000)
           {
            var msg = `${err.message.split(':')[4].replace('}' , "")} has already been taken`
            res.status(400).send({message : msg})
           }
           else
           {
            res.status(500).send({message:"Something Went Wrong"})
           }
      
            
      
         })
      }
         } )
      }
   })
}


exports.loginCustomer = (req,res)=>{
   const {password  , email}  = req.body;

   CustomerSchema.findOne({email  : email}).then((result)=>{
      console.log(result)
   if(result == null || result == 'undefined' )
   {
      res.status(400).send({message : "User Does Not Exists"})
   }
   else{
     bcrypt.compare(password , result.password , function(err,status){
      if(err)
      {
         res.status(400).send({message : "Something Went Wrong"})
      }
      else{
      if(status == true)
      {
         res.status(200).send({message : "User Login Successfully", data : result})
      }else
      {
         res.status(401).send({message  : "Incorrect Password"})
      }
      }
     }  )
   }
   }).catch((err)=>{
      res.send(err)
   })

}


exports.getProducts  =  (req,res)=>{
   ProductsSchema.find({}).then((result)=>{
      res.status(200).send({products :  result})
   }).catch((err)=>{
      res.status(400).send({message : err})
   })

}