import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import CartScreen from './components/screens/CartScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import ShippingScreen from './components/screens/ShippingScreen'

//Style
import { Container } from 'react-bootstrap'
import './App.css'
import PaymentScreen from './components/screens/PaymentScreen'
import PlaceOrderScreen from './components/screens/PlaceOrderScreen'

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/placeorder' component={ShippingScreen}>
						<PlaceOrderScreen/>
					</Route>
					<Route path='/payment' component={ShippingScreen}>
						<PaymentScreen/>
					</Route>
					<Route path='/shipping' component={ShippingScreen}>
						<ShippingScreen/>
					</Route>
					<Route path='/profile' component={ProfileScreen}>
						<ProfileScreen />
					</Route>
					<Route path='/register' component={RegisterScreen}>
						<RegisterScreen />
					</Route>
					<Route path='/login' component={LoginScreen}>
						<LoginScreen />
					</Route>
					<Route path='/product/:id' component={ProductScreen}>
						<ProductScreen />
					</Route>
					<Route path='/cart/:id?'>
						<CartScreen />
					</Route>
					<Route path='/' exact>
						<HomeScreen />
					</Route>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
