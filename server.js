// --- 1. REQUIRE PACKAGES ---
require('dotenv').config(); // Loads .env file contents
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// --- 2. SET UP THE SERVER ---
const app = express();
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse incoming JSON payloads

// --- 3. SET UP NODEMAILER ---
// This 'transporter' is the service that will send the email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // This is the key change
    secure: true, // Use SSL
    auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS  // Your App Password from .env
    }
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.log("Nodemailer transporter error:", error);
    } else {
        console.log("Nodemailer is ready to send emails.");
    }
});

// --- 4. CREATE THE API ENDPOINT ---
// This is the "address" our form will send its data to
app.post('/send', (req, res) => {
    
    // Get the data from the form (this is the 'body' we send from the frontend)
    const { name, email, service, message } = req.body;

    // Create the email content
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.EMAIL_TO,      // Your email from .env
        subject: `New Website Lead - ${service}`, // Subject line
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service of Interest:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            // Send a failure response back to the frontend
            res.status(500).json({ status: 'error', message: 'Error sending email.' });
        } else {
            console.log('Email sent: ' + info.response);
            // Send a success response back to the frontend
            res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
        }
    });
});

// --- 5. START THE SERVER ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});