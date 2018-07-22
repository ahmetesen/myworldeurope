const nodemailer = require('nodemailer');
var request = require('request');

exports.mailsender = function(req, res){

    if (!req.body.email || !req.body.name || !req.body.message || !req.body.captcha){

        res.status(400);
        res.send('Lütfen bilgilerinizi kontrol ediniz!');
    }



    var secretKey = "6LdsfWQUAAAAAGA205MyXRWFs50Q83UVHqWpU3fj";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body.captcha + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if(body.success !== undefined && !body.success) {

            return res.status(400).json({"responseCode" : 1,"responseDesc" : "Bir hata oluştu :("});
        }

        mailText = "Gönderen Adı:"+req.body.name+"\nGönderen Adresi: "+req.body.email+"\nMesaj:"+req.body.message;


        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'ahmetesen88@gmail.com', // generated ethereal user
                    pass: 'cxnwabzqooylwzvv' // generated ethereal password
                }
            });
    
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"MyWorldEurope iletisim" <geliyor@test.com>', // sender address
                to: 'ahmet.esen@aktifbank.com.tr', // list of receivers
                subject: 'MyWorldEurope iletisim', // Subject line
                text: mailText, // plain text body
            };
    
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {

                if (error) {

                    return res.status(400).json({"responseCode" : 1,"responseDesc" : "Mesaj gönderilemedi :("});
                    //TODO: Hatayı Logla!;
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                res.status(200).json({"responseCode" : 0,"responseDesc" : "Mesajınız iletilmiştir!"});
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    });
}
