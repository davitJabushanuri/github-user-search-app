import React from 'react'
import Bio from './Bio'
import Links from './Links'
import Profile from './Profile'
import Stats from './Stats'

const Card = () => {
	return (
		<section className='card'>
			<Profile />
			<Bio />
			<Stats />
			<Links />
		</section>
	)
}

export default Card
