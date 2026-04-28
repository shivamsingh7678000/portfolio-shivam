const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

// Rate limiter for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: "Too many contact requests. Please try again after 15 minutes.",
  },
});

// POST /api/contact
router.post("/", contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  try {
    // Configure transporter (use environment variables in production)
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "shivamsingh76780000@gmail.com",
        pass: process.env.EMAIL_PASS || "your_app_password_here",
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER || "shivamsingh76780000@gmail.com"}>`,
      to: "shivamsingh76780000@gmail.com",
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f0f1a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">📩 New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            ${subject ? `<tr><td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #1a1a2e; border-radius: 8px; border-left: 4px solid #6366f1;">
            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">Message:</p>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; color: #64748b; font-size: 12px;">Sent from Shivam Singh Portfolio</p>
        </div>
      `,
    };

    // In development, just log instead of sending
    if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === "your_gmail_app_password_here") {
      console.log("📧 Contact form submission (dev mode):", {
        name,
        email,
        subject,
        message,
      });
      return res.json({
        success: true,
        message:
          "Message received! (Set EMAIL_PASS in .env to enable real email sending)",
      });
    }

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again or email directly.",
    });
  }
});

module.exports = router;
