const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;



const app = express();

app.use(express.json());
app.use(cors());

//var req = require("./node_modules/req/node_modules/request");

app.use(express.json());

const db = mysql.createConnection({
	user: "admin",
	host: "mysql-50185-0.cloudclusters.net",
	password: "Transformers3",
	database: "Cantata",
	port: "18589"
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

app.post('/editProfile',(req,res)=>{
	const userID = req.body.userID;
	const Email = req.body.Email;
	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const Password = req.body.Password;
	const Bio = req.body.Bio;
	const Username = req.body.Username;

	db.query("INSERT INTO User (Fname,Lname,Bio,Username) VALUES (?,?,?,?)",[Fname,Lname,Bio,Username],(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send("User Added");
		}
	});
});

app.get('/Profile',(req,res)=>{
	db.query("SELECT * FROM User ORDER by userID ASC",(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.put('/update-user/:id',(req,res)=>{
	const ActiveStatus = req.body.ActiveStatus;
	const userID = req.body.userID;

	console.log(userID);

	const sqlUpdate = "UPDATE user SET ActiveStatus='Active' WHERE userID=?;";

	db.query(sqlUpdate,[ActiveStatus,userID],(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	})
});


app.listen(3001, () => {
	console.log("running on port 4000");
});