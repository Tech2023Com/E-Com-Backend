const mongoose = require('mongoose');
// https://levelup.gitconnected.com/handling-errors-in-mongoose-express-for-display-in-react-d966287f573b

mongoose.connect('mongodb://localhost:27017/ECOMFINAL23' , {
    useNewUrlParser : true
})


const db  =  mongoose.connection;
db.on('error' , console.error.bind(console , "Something went wrong in connection"))
db.once('open' , function(){
    console.log(`Successfully connected with MongoDB`)
})


module.exports =  db;