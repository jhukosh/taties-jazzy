const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'me@gmail.com',
    pass: '' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'me@gmail.com',
  to: 'me@gmail.com',
  subject: 'Test nodemailer',
  text: 'Dude please work, I\'m tired'
};

export const sendMessageService = {
  methods: {
    sendMessage: () => new Promise ( (resolve, reject) => {
      transporter.sendMail(mailOptions, function(error, info){
        console.log('coucou');
      if (error) {
      console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
    resolve('ok');
    reject('No event found in databse');
  })
  }
}