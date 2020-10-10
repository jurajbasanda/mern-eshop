import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
//Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./components/screens/HomeScreen"
import ProductScreen from "./components/screens/ProductScreen"
import CartScreen from "./components/screens/CartScreen"

//Style
import { Container } from "react-bootstrap"
import "./App.css"

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' exact>
						<HomeScreen />
					</Route>
					<Route path='/product/:id' component={ProductScreen}>
						<ProductScreen />
					</Route>
					<Route path='/cart/:id?'>
						<CartScreen />
					</Route>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
