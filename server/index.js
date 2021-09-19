const express = require("express");
const mysql = require("mysql");
const multer = require('multer');
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');


const app = express();

app.use(express.json());
app.use(cors());

//var req = require("./node_modules/req/node_modules/request");

app.use(express.json());

const storage = multer.diskStorage({
	destination: (req,file,cb)=>{
		cb(null,"./")},
		filename: function(req,file,cb){
			const ext = file.mimetype.split("/")[1];
			cb(null, 'Assets/${file.originalname}-${Date.now()}.${ext}');
		}
});

const upload = multer({
	storage:storage
})


const db = mysql.createConnection({
	user: "",
	host: "",
	password: "",
	database: "",
	port: ""
});

db.connect();

app.use(cors({
	origin:true,
	methods: ["Get","POST"],
	credential:true,
}));

app.post("/api/image", upload.single('image'),(req,res,err) => {
	if(!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)){

		res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
	} else {
		const image = req.file.filename;
		const id = 1;

		const sqlInsert = "UPDATE images SET 'image' = ? WHERE id = ?;"

		RTCPeerConnection.query(sqlInsert,[image,id], (err,result)=>{
			if(err){
				console.log(err)
				res.send({
					msg:err
				})
			}

			if(result){
				res.send({
					data:result,
					msg:'Your image has been updated!'
				});
			}
		})
	}
});


app.post('/sign-up', (req, res)=> {

	const fullname = req.body.fullname
	const address = req.body.address
	const nic = req.body.nic
	const telephone = req.body.telephone
	const email = req.body.email
	const password = req.body.password
 
	bcrypt.hash(password,saltRounds, (err,hash) => {

		if(err){
			console.log(err);
		}
	db.query
	("INSERT INTO signup (fullname, address, nic, telephone, email, password) VALUES (?,?,?,?,?,?)", 
	[fullname, address, nic, telephone, email, hash], 
	(err, result)=> {
		console.log(err);
	})	
	})
	
});

app.post('/login', (req, res) => {

	const email = req.body.email
	const password = req.body.password

	db.query
	("SELECT * signup WHERE email = ?;", 
	email, 
	(err, result)=> {

		if(err){
			res.send({err: err})
		}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response)=>{
					if(response){
						res.send(result)
					}else{
						res.send({message:"Wrong username/password combination!"})
					}
				})
			}else{
				res.send({message:"User doesn't exist"});
			}
		}
	);
});

app.listen(3001, () => {
	console.log("running on port 4000");
});