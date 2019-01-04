const express = require('express');
const app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended : true}));


app.get('/xx', function(req,resp){
    console.log(1); 
})
app.get('/', function(req,resp){
    resp.sendFile(__dirname + "/../index.html")
})


app.get('/form', function(req,resp){
    resp.sendFile(__dirname + "/pages/form.html")
})
app.get('/formm', function(req,resp)
{  
    
    formUtils.formUtils(req).then(res=>{
        resp.send(res)
    })
   console.log(req.query.fname); 
   console.log(req.query.lname); 
  // resp.send("data saved");
})



console.log("listen to port 8008");
app.listen(8008)