var express = require('express');
var router = express.Router();
var sendEmail = require('../models/sendEmail')
const app = express()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add' , function(req , res, next){
  let data = req.body
  // saveOnDb
  sendEmail.sendEmail(data).then(console.log("success"))
  console.log(data)
  console.log("ddd")
 // res.render('index', { title: 'Express' });
 // res.render('index', { user: data })
  res.send("User was saved")
})

module.exports = router;
