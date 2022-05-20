import React, { useState, useEffect } from 'react'

import './scss/main.scss'
import Header from './components/Header'
import Card from './components/Card'
import Search from './components/Search'

function App() {
	const [theme, setTheme] = useState('LIGHT')
	const [input, setInput] = useState('octocat')
	const [user, setUser] = useState()
	const [error, setError] = useState(false)

	const getData = async input => {
		try {
			const data = await fetch(`https://api.github.com/users/${input}`)
			const user = await data.json()
			if (user.message) {
				setError(true)
				return
			}
			setUser(user)
		} catch (error) {
			throw new Error(error)
		}
	}

	useEffect(() => {
		getData(input)
	}, [input])

	return (
		<main id={theme}>
			<div className='App'>
				<Header theme={theme} setTheme={setTheme} />
				<Search setInput={setInput} error={error} setError={setError} />
				<Card user={user} />
			</div>
		</main>
	)
}

export default App
