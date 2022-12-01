const nodemailer = require('nodemailer');
2
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.gruponucleon.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "andresarzate@gruponucleon.com", // generated ethereal user
      pass: "Henry-Nodejs-2022", // generated ethereal password
        },
	tls:{ 
	secure: false,
    	ignoreTLS: true,
    	rejectUnauthorized: false
	},

  });  




// test account
// andresarzate@gruponucleon.com
// passwrd: Henry-Nodejs-2022
// smtp port: 587    2525 default
// SMTP Server="mail.gruponucleon.com 
//
// fuene:
// https://www.courier.com/blog/how-to-send-emails-with-node-js/
//  https://nodemailer.com/smtp/
	// to test use:   https://ethereal.email
	//
	//
	// otras opciones:
	// https://www.mailersend.com/features/email-api

message = {
         from: "andresarzate@gruponucleon.com",
         to: "andresarzate@gruponucleon.com",
         subject: "titulo del mensaje",
         text: "Su cuenta en CryptoShop ha sido activada."
    }

let info = await transporter.sendMail({
from: '"Principal 👻" <andresarzate@gruponucleon.com>', // sender address
    to: "andrezarzate@gruponucleon.com, direccion@gruponucleon.com", // list of receivers
    subject: "Hello world ✔", // Subject line
    text: "Hello world? all works fine!!", // plain text body
	html: "<b>Se puede incluir html?</b>", // html body
});
	
   
console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);



