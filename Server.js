const express = require('express')
const app = express()
const PORT = 8989
const DB = require('./DB/DB')
const CustomerRoutes = require('./Routes/CustomerRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')
const bodyParser = require('body-parser')
var cors = require('cors')
const multer = require('multer')

// Event Lop 

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
	  console.log("******",file.mimetype.split('/')[1])
	  
	  cb(null, file.fieldname + '-' + uniqueSuffix+'.' + file.mimetype.split('/')[1])
	}
  })
  
  const upload = multer({ storage: storage })

app.post("/upload_files", upload.array("files"), uploadFiles);


function uploadFiles(req, res) {
	console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}



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
app.use('/admin' , AdminRoutes)


app.listen(PORT ,(req,res)=>{
    console.log(`Server is running on PORT : ${PORT}`)
})









