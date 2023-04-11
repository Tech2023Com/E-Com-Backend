const express = require('express')
const app = express()
const PORT = 8989
const DB = require('./DB/DB')
const CustomerRoutes = require('./Routes/CustomerRoutes')
const bodyParser = require('body-parser')
var cors = require('cors')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});


app.use('/customer',CustomerRoutes)


app.listen(PORT ,(req,res)=>{
    console.log(`Server is running on PORT : ${PORT}`)
})









