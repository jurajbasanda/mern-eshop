import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'
//Data Products
import products from '../../products_and_images/products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => (
          <Col cm={12} md={6} lg={4} ky={item._id}>
            <Product product={item}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
