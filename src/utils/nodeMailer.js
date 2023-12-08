const nodemailer = require("nodemailer");

export async function sendHTMLEmail(subject, html, receivers) {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "Outlook", // Use your preferred service
    auth: {
      user: "babeengineer@outlook.com",
      pass: "Notepad++",
    },
  });

  // Email content
  // let htmlContent = `
  //     <h1>Hello from My App!</h1>
  //     <p>This is a test email with HTML content.</p>
  //     <a href="https://example.com">Click here</a>
  // `;

  // Setup email data
  let mailOptions = {
    from: "babeengineer@outlook.com", // Sender address
    to: receivers, // List of recipients
    subject, // Subject line
    // text: 'This is a test email with HTML content.', // Plain text body
    html, // HTML body content
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}
