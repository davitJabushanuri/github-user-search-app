import React from 'react'
import DarkThemIcon from '../assets/icon-moon.svg'
import LightThemIcon from '../assets/icon-sun.svg'

const Header = () => {
	return (
		<section className='header'>
			<h1 className='header__h1'>devfinder</h1>
			<div className='header__theme'>
				<h2 className='header__theme__h2'>DARK</h2>
				<img src={DarkThemIcon} alt='' className='header__theme__icon' />
			</div>
		</section>
	)
}

export default Header
