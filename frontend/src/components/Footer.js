import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../footer.scss'

const Footer = () => {
	const [emailAdress, setEmailAdress] = useState('')
	const submitSubscribe = (e) => {
		e.preventDefault()
		const email = emailAdress
		axios.post(`/api/emails`,{email})
		.then((res) => {
			console.log(res);
		  }, (error) => {
			console.log(error);
		  });
	}
	return (
		<footer>
			<div className='footer-group'>
				<ul className='socialNetworks'>
					<li>
						<a href='/'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a href='/'>
							<i className='fab fa-instagram'></i>
						</a>
					</li>
					<li>
						<a href='/'>
							<i className='fab fa-facebook-f'></i>
						</a>
					</li>
				</ul>
				<form onSubmit={submitSubscribe} className='sub'>
					<label htmlFor='email'>Join our Newsletter</label>
					<input
						type='emial'
						id='email'
						name='email'
						placeholder='Email Adress'
						value={emailAdress}
						onChange={(e) => setEmailAdress(e.target.value)}
					/>
					<button>Join</button>
				</form>
			</div>
			<br />
			<ul className='footer-list'>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/'>FAQ's</Link>
				</li>
				<li>
					<Link to='/'>Returns</Link>
				</li>
				<li>
					<Link to='/'>Terms and Conditions</Link>
				</li>
			</ul>
			<br />
			<section className='madeBy'>
				© {new Date().getFullYear()}, Made by
				{` `}
				<a href='https://www.jurajbasanda.com'>Juraj Basanda</a>
			</section>
		</footer>
	)
}
export default Footer
