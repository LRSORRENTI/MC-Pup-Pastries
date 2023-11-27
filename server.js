require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();

// Set up multer for multipart form data
const upload = multer();

// Middleware
app.use(cors());


// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/send', upload.none(), (req, res) => { // Use multer middleware
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `You have a new submission from:
Name: ${name}
Email: ${email}
Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ status: 'error', message: 'Error sending email' }); // Send JSON response
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ status: 'success', message: 'Email successfully sent' }); // Send JSON response
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});