
const nodemailer = require('nodemailer');

exports.sendEmail= (user)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: "",
               pass:  ""
           }
       });

       const mailOptions = {
        from: 'giladberg@gmail.com', // sender address
        to: 'giladberg@gmail.com', // list of receivers
        subject: 'לקוח חדש התעניין במסיבה', // Subject line
        html: `<h1>שלום דני,להלן פרטי הלקוח</h1>
                <p> שם : ${user.name}</p>
                <p> מייל : ${user.email} </p>
                <p>טלפון : ${user.phone}</p>
                <p>הודעת הלקוח : ${user.message}</p>`
      };

    var prom =  new Promise( (resolve,reject) =>{
      
     resolve( transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
      }))
      
        // axios.get("https://jsonplaceholder.typicode.com/users").
        //     then(response =>resolve(response.data) )

    })

    return prom
}


  

  
 