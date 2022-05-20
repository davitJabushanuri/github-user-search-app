import React from 'react'
import Bio from './Bio'
import Links from './Links'
import Profile from './Profile'
import Stats from './Stats'
const Card = ({ user }) => {
	console.log(user)
	return (
		<section className='card'>
			<Profile
				avatar={user && user.avatar_url}
				name={user && user.name}
				login={user && user.login}
				joined={user && user.created_at}
			/>
			<Bio bio={user && user.bio} />
			<Stats
				repos={user && user.public_repos}
				followers={user && user.followers}
				following={user && user.following}
			/>
			<Links
				location={user && user.location}
				blog={user && user.blog}
				twitter={user && user.twitter_username}
				company={user && user.company}
			/>
		</section>
	)
}

export default Card
