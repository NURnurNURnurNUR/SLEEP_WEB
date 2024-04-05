const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/send-email', async (req, res) => {
  try {
    const { name, message } = req.body;

    
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '', 
        pass: 'your-email-password'  
      }
    });

    
    await transporter.sendMail({
      from: 'your-email@gmail.com', 
      to: 'recipient@example.com', 
      subject: `New message from ${name}`,
      text: message
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




