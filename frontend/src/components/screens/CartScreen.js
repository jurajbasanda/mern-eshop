import React, { useEffect } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Card, Col, Image, Form, ListGroup, Button } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import Message from '../Message'

const CartScreen = () => {
  //Router hooks
  const { id } = useParams()
  const location = useLocation()
  const history = useHistory()
  //Get qty
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  //Use redux
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [id, dispatch, qty])
  //Remove product from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  //Go to login or shipping
  const checkoutHandler = () => {
    history.push(`/login?redirect/shipping`)
  }
  return <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go back</Link></Message>
        : (<ListGroup variant='flush'>
          {cartItems.map(item => (<ListGroup.Item key={item.product}>
            <Row>
              <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded />
              </Col><Col md={3}>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </Col>
              <Col md={2}>£ {item.price}</Col>
              <Col md={2}>
                <Form.Control
                  as='select'
                  value={item.qty}
                  onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                >
                  {[...Array(item.countInStock).keys()].map(
                    (x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    )
                  )}
                </Form.Control>
              </Col>
              <Col md={2}>
                <Button type="button" variant='light' onClick={() => removeFromCartHandler(item.product)}>
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>))}
        </ListGroup>)}
    </Col>
    <Col><Card><ListGroup variant='flush'>
      <ListGroup.Item>
        <h2>Subtotal ({cartItems.reduce((acc, current) => acc + current.qty, 0)}) Items</h2>
                    £ {cartItems.reduce((acc, current) => acc + current.qty * current.price, 0).toFixed(2)}
      </ListGroup.Item>
      <ListGroup.Item>
        <Button type='button' className='btn-block' disabled={true ? cartItems === 0 : false} onClick={checkoutHandler}>
          Checkout
                    </Button>
      </ListGroup.Item>
    </ListGroup>
    </Card></Col>
  </Row>
}

export default CartScreen
