import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import Message from '../Message'
import CheckoutSteps from '../CheckoutSteps'
import { createOrder } from '../../actions/orderActions'


const PlaceOrderScreen = () => {
  //Redux Hooks
  const {push} = useHistory()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
 //   Calculate prices
 const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

cart.itemsPrice = addDecimals(
  cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
)
cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
cart.totalPrice = (
  Number(cart.itemsPrice) +
  Number(cart.shippingPrice) +
  Number(cart.taxPrice)
).toFixed(2)

const orderCreate = useSelector((state) => state.orderCreate)
const { order, success,error } = orderCreate

useEffect(() => {
  if (success) {
    push(`/order/${order._id}`)
  }
  // eslint-disable-next-line
}, [push, success])
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

	return (
		<>
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p><strong>Address: </strong><br/>
								{cart.shippingAddress.address}<br/> 
								{cart.shippingAddress.postCode}<br/>
								{cart.shippingAddress.city}<br/>
								{cart.shippingAddress.country}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: </strong>
								{cart.paymentMethod}
              </p>
              <Button onClick={()=> push(`/payment`)}>Change</Button>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Your cart is empty</Message>
							) : (
								<ListGroup variant='flush'>
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={3}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={2}>
													<Row>
														<strong> £ {item.price}</strong>{' '}
													</Row>
													<Row>
														<p>
															<strong>Qty:</strong> {item.qty}
														</p>
													</Row>
													<Row>
														<p>
															<strong>Total: £ {item.qty * item.price}</strong>
														</p>
													</Row>
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col>
					<Card>
            <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h2>Order Summery</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Items</Col>
                        <Col>£ {cart.itemsPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Shipping</Col>
                        <Col>£ {cart.shippingPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Tax</Col>
                        <Col>£ {cart.taxPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Total</Col>
                        <Col>£ {cart.totalPrice}</Col>
                      </Row>
					</ListGroup.Item>
					{error && <ListGroup.Item><Message variant='danger'>{error}</Message></ListGroup.Item>}

                    <ListGroup.Item>
                       <Button type='button' className='btn-block' disabled={cart.cartItems === 0 ? true : false} onClick={placeOrderHandler}>Place Order</Button>
					</ListGroup.Item>
					
					
            </ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default PlaceOrderScreen
