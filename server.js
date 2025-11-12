// --- 1. REQUIRE PACKAGES ---
require('dotenv').config(); // Loads .env file contents
const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid

// --- 2. SET UP THE SERVER ---
const app = express();
app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse incoming JSON payloads

// --- 3. SET UP SENDGRID ---
// This is the new part. It finds your API key in the .env file.
sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
console.log("SendGrid API Key configured.");

// --- 4. CREATE THE API ENDPOINT ---
app.post('/send', (req, res) => {
    
    // Get the data from the form
    const { name, email, service, message } = req.body;

    // Create the email content (SendGrid format)
    const msg = {
        to: process.env.EMAIL_TO, // Your receiving email from .env
        from: process.env.EMAIL_FROM, // Your VERIFIED SENDER email from .env
        subject: `New Website Lead - ${service}`,
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
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent successfully!');
            res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
        })
        .catch((error) => {
            console.error("Error sending email:", error.response.body);
            res.status(500).json({ status: 'error', message: 'Error sending email.' });
        });
});

// --- 5. START THE SERVER ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});