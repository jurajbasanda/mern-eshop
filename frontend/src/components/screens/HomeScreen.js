import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'
//Data Products

const HomeScreen = () => {
  const [Products, setProducts] = useState([])
  const fetchProducts = async () => {
    const { data } = await axios.get(`/api/products`)
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()

  }, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {Products.map((item) => (
          <Col cm={12} md={6} lg={4} key={item._id} key={item.name}>
            <Product product={item} ></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
