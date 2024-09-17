// functions/send-email.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, phone, subject, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: 'mail.websitesmdla.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'hello@websitesmdla.com',
      pass: '25be_3ib@lb1'
    }
  });

  const mailOptions = {
    from: 'hello@websitesmdla.com',
    to: 'waroxa@gmail.com',
    subject: subject,
    text: `${message} - From: ${email} - Phone: ${phone} - Name: ${name}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: 'Email sent' };
  } catch (error) {
    return { statusCode: 500, body: 'Error sending email' };
  }
};
