const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')



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

app.get('/*' , (req, res) => res.sendFile((path.join(__dirname))))

app.get('/users' , function(req , res){
   res.send('You did it!')
})

const port = 3000
app.listen(port, function () {
  console.log(`Running on port ${port} - ${Date()}`)
})