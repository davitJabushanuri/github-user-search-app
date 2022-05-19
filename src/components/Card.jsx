import React from 'react'
import Bio from './Bio'
import Links from './Links'
import Profile from './Profile'
import Stats from './Stats'

const Card = () => {
	return (
		<div>
			<Profile />
			<Bio />
			<Stats />
			<Links />
		</div>
	)
}

export default Card
