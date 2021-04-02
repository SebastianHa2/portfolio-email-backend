const nodemailer = require('nodemailer')
require('dotenv/config')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
    }
})

exports.getEmail = (req, res, next) => {
    const mailOptions = {
        from: req.body.email,
        to: process.env.MY_EMAIL,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: `${req.body.message}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        res.send(info)
    })
}