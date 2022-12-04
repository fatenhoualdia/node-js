var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fatenkhoualdia@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'fatenkhoualdia@gmail.com',
  to: 'wafakh@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});