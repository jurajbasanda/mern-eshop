import express from "express"
import { getProductById, getProducts } from '../controllers/productController.js'
const router = express.Router()

//Fetch all products Get /api/products => Public
router.route('/').get(getProducts)

//Fetch single product Get /api/products/:id => Public
router.route('/:id').get(getProductById)

export default router
