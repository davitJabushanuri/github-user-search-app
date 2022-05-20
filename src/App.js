import React, { useState, useEffect } from 'react'

import './scss/main.scss'
import Header from './components/Header'
import Card from './components/Card'
import Search from './components/Search'

function App() {
	const [theme, setTheme] = useState('LIGHT')

	return (
		<main id={theme}>
			<div className='App'>
				<Header theme={theme} setTheme={setTheme} />
				<Search />
				<Card />
			</div>
		</main>
	)
}

export default App
