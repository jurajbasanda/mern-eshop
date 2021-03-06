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
import OrderScreen from './components/screens/OrderScreens'
import OrderListScreen from './components/screens/OrderListScreen'
import UsersListScreen from './components/screens/UsersListScreen'
import ProductListScreen from './components/screens/ProductListScreen'
import ProductEditScreen from './components/screens/ProductEditScreen'
import UserEditScreen from './components/screens/UserEditScreen'

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
					<Route path='/order/:id'>
						<OrderScreen />
					</Route>
					<Route path='/placeorder'>
						<PlaceOrderScreen />
					</Route>
					<Route path='/payment'>
						<PaymentScreen />
					</Route>
					<Route path='/shipping'>
						<ShippingScreen />
					</Route>
					<Route path='/admin/userlist'>
						<UsersListScreen />
					</Route>
					<Route path='/admin/user/:id/edit'>
						<UserEditScreen />
					</Route>

					<Route path='/admin/orderlist' exact>
						<OrderListScreen />
					</Route>
					<Route path='/admin/productlist/:pageNumber' exact>
						<ProductListScreen />
					</Route>
					<Route path='/admin/product/:id/edit'>
						<ProductEditScreen />
					</Route>
					<Route path='/admin/productlist' exact>
						<ProductListScreen />
					</Route>
					<Route path='/profile'>
						<ProfileScreen />
					</Route>
					<Route path='/register'>
						<RegisterScreen />
					</Route>
					<Route path='/login'>
						<LoginScreen />
					</Route>
					<Route path='/product/:id'>
						<ProductScreen />
					</Route>
					<Route path='/cart/:id?'>
						<CartScreen />
					</Route>
					<Route path='/search/:keyword' exact>
						<HomeScreen />
					</Route>
					<Route path='/page/:pageNumber' exact>
						<HomeScreen />
					</Route>
					<Route path='/search/:keyword/page/:pagenumber' exact>
						<HomeScreen />
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
