import React from 'react'
import DarkThemIcon from '../assets/icon-moon.svg'
import LightThemIcon from '../assets/icon-sun.svg'

const Header = ({ theme, setTheme }) => {
	const changeTheme = e => {
		setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')
	}

	return (
		<section className='header'>
			<h1 className='header__h1'>devfinder</h1>
			<button onClick={e => changeTheme(e)} className='header__theme'>
				<h2 className='header__theme__h2'>
					{theme === 'LIGHT' ? 'DARK' : 'LIGHT'}
				</h2>
				<img src={DarkThemIcon} alt='' className='header__theme__icon' />
			</button>
		</section>
	)
}

export default Header
