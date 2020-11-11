import express from 'express'
import nodemailer from 'nodemailer'

const sendMessage = express.Router()

sendMessage.post('/', (req, res) => {
    const {email} = req.body
    if(email){
	//Acc
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		port: 465,
		auth: { user: process.env.GMAIL_NAME, pass: process.env.GMAIL_PASS },
	})
	//Mail object
	let mail = {
		from: process.env.GMAIL_NAME,
		to: email,
		subject: 'DELETE Shop',
		html: `<h3>Welcome to Delete Shop</h3>`,
	}
	transporter.sendMail(mail, (err, info) => {
		if (err) {
            console.log(err)
		} else {
			console.log(info.accepted);
		}
    })
}
    else{
        res.status(204)
		throw new Error('Email adress is missing')
    }
})

export { sendMessage }
