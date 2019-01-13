const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user "",
         pass:  ""
     }
 });

 const mailOptions = {
  from: 'tomeraitz1@gmail.com', // sender address
  to: 'giladberg@gmail.com', // list of receivers
  subject: 'Tomer is the king', // Subject line
  html: '<p>This mail was sent through full moon app</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if(err)
    console.log(err)
  else
    console.log(info);
});


const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}




// Mongoose setup
// const mongoose = require('mongoose')
// mongoose.connect(
//   'mongodb://localhost/doggiesDB',
//   { useNewUrlParser: true }
// ).then(() => console.log("DB Connected"))

app.use(express.static(path.join(__dirname, 'dist/fullmoonAngular')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(allowCrossDomain)


app.get('/users' , function(req , res){
   res.send("Gilad")
})

app.post('/user' , function(req , res){
  let data = req.body
  // saveOnDb
  // Send to Deni
  console.log(data)
  res.send("User was saved")
})


const port = 3000
app.listen(port, function () {
  console.log(`Running on port ${port} - ${Date()}`)
})