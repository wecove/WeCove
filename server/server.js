const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require('dotenv').config();

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure Nodemailer with your Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sharmachetan7816@gmail.com',
      pass: 'hhxy qmsn bxjx fyjs' // Replace this!
    }
  });

  const mailOptions = {
    from: email,
    to: 'sharmachetan7816@gmail.com',
    subject: `Wecove Inquiry: ${subject} from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Transmission successful.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Transmission failed.' });
  }
});

app.listen(PORT, () => console.log(`Wecove server alive on port ${PORT}`));