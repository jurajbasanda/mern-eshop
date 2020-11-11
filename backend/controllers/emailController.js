import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import Email from '../models/emailModel.js'

//User auth. POST/api/users/login => Public
const registerSubsribe = asyncHandler(async (req, res) => {
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

	const emailExists = await Email.findOne({ email })

	if (emailExists) {
		res.status(400)
		throw new Error('Email already exists')
	}

	const email = await Email.create({
		email
	})

	if (email) {
		res.status(201).json({			
			email: email,
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

export {registerSubsribe}