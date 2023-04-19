const mongoose  = require('mongoose');


const ProductsSchema  =  new mongoose.Schema({
    p_name : {
        type :  String,
        required  :true,
    },
    category : {
        type : String,
        required : true,
       
    },
    specifications  :  {
        type :  Array,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : String,
    },

    quantity : {
        type: Number,
        required : true
    },
    price : {
        type : Number,
        required : true

    }

})

const Products = mongoose.model('Products' , ProductsSchema );

module.exports =  Products;
