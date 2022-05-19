import React, { useState, useEffect } from 'react'

import './scss/main.scss'
import Header from './components/Header'
import Card from './components/Card'

function App() {
	const [theme, setTheme] = useState('LIGHT')

	return (
		<main className='App light'>
			<Header theme={theme} setTheme={setTheme} />
			<Card />
		</main>
	)
}

export default App
