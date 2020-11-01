import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
	//Router hooks
	const { push } = useHistory()

	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			push(`/search/${keyword}`)
		} else {
			push(`/`)
		}
	}
	return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search product...'
				className='mr-sm-2 ml-sm-5'
			></Form.Control>
			<Button type='submit' vriant='outline-success' className='p-2'>
				Search
			</Button>
		</Form>
	)
}

export default SearchBox
