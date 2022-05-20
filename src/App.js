import React, { useState, useEffect } from 'react'

import './scss/main.scss'
import Header from './components/Header'
import Card from './components/Card'
import Search from './components/Search'

function App() {
	const [theme, setTheme] = useState('LIGHT')
	const [input, setInput] = useState('octocat')
	const [user, setUser] = useState()

	const getData = async input => {
		const data = await fetch(`https://api.github.com/users/${input}`)
		const user = await data.json()
		setUser(user)
	}

	console.log(user)

	useEffect(() => {
		getData(input)
	}, [input])

	return (
		<main id={theme}>
			<div className='App'>
				<Header theme={theme} setTheme={setTheme} />
				<Search setInput={setInput} />
				<Card user={user} />
			</div>
		</main>
	)
}

export default App
