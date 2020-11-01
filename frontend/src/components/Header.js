import React from 'react'
import SearchBox from './SearchBox'
import { LinkContainer } from 'react-router-bootstrap'
//Style
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { useHistory } from 'react-router-dom'

const Header = () => {
	//Router Hooks
	const { push } = useHistory()
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin
	const logoutHnadler = () => {
		dispatch(logout())
		push('/login')
	}
	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>DELETE</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<SearchBox />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link href='/cart'>
									<i className='fas fa-shopping-cart'></i> Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHnadler}>
										Log Out
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i> Sign in
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
