// Importing the nodemailer package
const nodemailer = require('nodemailer');

// Creating a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // your email
    pass: 'your_password' // your password
  }
});

// Email Content
const mailOptions = {
  from: 'your_email@gmail.com', // your email
  to: 'recipient_email@example.com', // recipient's email
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

// Sending Email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred: ',error);
  } else {
    console.log('Email sent successfully:' + info.response);
  }
});
