require("dotenv").config();
const nodemailer = require("nodemailer");

// Setup SMTP transporter (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shivams905@gmail.com", // Get email from .env file
    pass: "ilww shef vlnr vezf", // Get password from .env file
  },
  port: 567,
});

// Send OTP email
const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: "shivams905@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP for registration is: ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail };
