const nodeoutlook = require('nodejs-nodemailer-outlook')

function sendEmail (dest , message){
    try {
        nodeoutlook.sendEmail({
            auth: {
                user: process.env.senderEmail,
                pass: process.env.senderPassword
            },
            from:  process.env.senderEmail,
            to: dest,
            subject: 'Hey you, awesome!',
            html: message,
            text: 'This is text version!',
            onError: (e) => console.log(e),
            onSuccess: (i) => console.log(i)
        });
    } catch (error) {
        // res.status(500).json({message:'email error'})
        console.log(`catch err ${error}`);
    } 
}
// const sgMail = require('@sendgrid/mail');
// function sendEmail(dest, message) {
//     try {
//         sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//         const msg = {
//             to: dest,
//             from: 'mahmoudelwan460@gmail.com', // Use the email address or domain you verified above
//             subject: 'Sending with Twilio SendGrid is Fun',
//             text: 'and easy to do anywhere, even with Node.js',
//             html: message,
//         };
//         (async () => {
//             try {
//                 await sgMail.send(msg);
//             } catch (error) {
//                 console.error(error);
//                 if (error.response) {
//                     console.error(error.response.body)
//                 }
//             }
//         })();
//     } catch (error) {
//         console.log(`catch err ${error}`);
//     }
// }

module.exports = sendEmail