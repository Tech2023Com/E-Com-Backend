const mongoose  = require('mongoose');


const CustomerSchema  =  new mongoose.Schema({
    name : {
        type :  String,
        required  :true,
    },
    email : {
        type : String,
        required : true,
        unique :[true , "This Email ID is Already Taken" ]  
    },
    mobile  :  {
        type :  String,
        required : true,
        unique :  [true , "This Mobile Number is Already Taken" ] 
    },
    house_no : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required  : [true , "Address is Required"  ]  },

    pincode : {
        type: String,
        required : true
    },
    lat : {
        type : String,
        required : true
    },
    long : {
        type : String,
        required : true
    },
    password :{
        type :  String,
        required : true
    }
})

const Cutomer = mongoose.model('Cutomers' , CustomerSchema );

module.exports =  Cutomer;
