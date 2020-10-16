import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Button,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormContainer'
import CheckoutSteps from '../CheckoutSteps'
import { savePaymentMethod } from '../../actions/cartActions'
import { getUserDetails } from '../../actions/userAction'

const PaymentScreen = () => {
	//Router Hooks
	const { push } = useHistory()
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart

	const dispatch = useDispatch()

	if (!shippingAddress) {
		push('/login')
	}
	const [paymentMethod, setPaymentMethod] = useState('PayPal')
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		push('/login?redirect=placeorder')
	}
	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
			  <Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
				<Col>
				  <Form.Check
					type='radio'
					label='PayPal or Credit Card'
					id='PayPal'
					name='paymentMethod'
					value='PayPal'
					checked
					onChange={(e) => setPaymentMethod(e.target.value)}
				  ></Form.Check>
				</Col>
			</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}

export default PaymentScreen
