const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: "standalonecomplex@outlook.co.nz",
        pass: "gh0st1ine",
    },
});

var debug = true;

if (debug = true) {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    })
  };
  