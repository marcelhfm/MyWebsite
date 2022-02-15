const nodemailer = require("nodemailer");

interface MailInterface {
  from: String;
  to: String;
  subject: String;
  text: String;
}

function send(mail: MailInterface) {
  try {
    //Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    //Verify connection
    transporter.verify(function (error, success) {
      if (error) {
        console.log("ERROR", error);
      } else {
        console.log("Connection to SMTP server established.");
      }
    });

    transporter.sendMail(mail);
    transporter.close();
  } catch (err) {
    console.log("MAIL ERR:", err);
  }
}

export default send;
