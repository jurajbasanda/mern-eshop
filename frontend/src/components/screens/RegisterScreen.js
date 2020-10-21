import React, { useState, useEffect } from 'react'
import {  useHistory, useLocation } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import FormContainer from '../FormContainer'
import { register } from '../../actions/userAction'

const RgisterScreen = () => {
	//Router Hooks
	const { search } = useLocation()
	const { push } = useHistory()
	//State
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister

	const redirect = search ? search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			push(redirect)
		}
	}, [push, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password === confirmPassword) {
			dispatch(register(name, email, password))
		} else {
			setMessage('Password do not match')
		}
	}
	return (
		<FormContainer>
			<h1>Sign Up</h1>
			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter name'
						autoComplete='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						autoComplete='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						autoComplete='current-password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='confirmPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm password'
						autoComplete='current-password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Register
				</Button>
			</Form>
		</FormContainer>
	)
}

export default RgisterScreen
