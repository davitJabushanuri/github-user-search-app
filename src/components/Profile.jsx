import React from 'react'

const Profile = () => {
	return (
		<div className='profile'>
			<div className='profile__imgContainer'>
				<img
					src='https://avatars.githubusercontent.com/u/1500684?v=4'
					alt=''
					className='profile__imgContainer__image'
				/>
			</div>
			<h2 className='profile__name'>The Octocat</h2>
			<p className='profile__nickname'>@octocat</p>
			<p className='profile__joinDate'>Joined 25 Jan 2011</p>
		</div>
	)
}

export default Profile
