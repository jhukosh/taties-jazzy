const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juliahukoshi@gmail.com',
    pass: 'Symetry1988' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'juliahukoshi@gmail.com',
  to: 'juliahukoshi@gmail.com',
  subject: 'Test nodemailer',
  text: 'Dude please work, I\'m tired'
};

export const sendMessage = transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});