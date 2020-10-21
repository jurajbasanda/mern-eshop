import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormContainer'
import CheckoutSteps from '../CheckoutSteps'
import { saveShippingAddress } from '../../actions/cartActions'

const ShippingScreen = () => {
	//Router Hooks
	const { push } = useHistory()
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart

	const [address, setAddress] = useState(shippingAddress.address)
	const [city, setCity] = useState(shippingAddress.city)
	const [postCode, setPostCode] = useState(shippingAddress.postCode)
	const [country, setCountry] = useState(shippingAddress.country)
	const dispatch = useDispatch()
	const userDetails = useSelector((state) => state.userDetails)
	const { user } = userDetails

	if (!user) {
		push('/login')
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(saveShippingAddress({ address, city, postCode, country }))
		push('/login?redirect=payment')
	}
	return (
		<FormContainer>
			<CheckoutSteps step1 step2></CheckoutSteps>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address'>
					<Form.Label>Adress</Form.Label>
					<Form.Control
						type='textarea'
						as='textarea'
						rows='3'
						required
						placeholder='Enter address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='postcode'>
					<Form.Label>Postcode</Form.Label>
					<Form.Control
						type='text'
						required
						placeholder='Enter postcode'
						value={postCode}
						onChange={(e) => setPostCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						required
						placeholder='Enter city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						required
						placeholder='Enter country'
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type='submit' ariant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}

export default ShippingScreen
