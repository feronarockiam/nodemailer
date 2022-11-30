var express = require('express');
var nodemailer = require('nodemailer');
var app = express();


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'feron1493@gmail.com',
    pass: ' hpvifyoutegquldm '
  }
});

var mailOptions = {
  from: 'feron1493@gmail.com',
  to: ' jay@gmail.com',
  subject: 'Happy coding',
  text: `hi i am feron`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

app.listen(4000,(req,res)=>{
  console.log('server is running');
  })
