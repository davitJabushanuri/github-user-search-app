import React from 'react'

const Profile = ({ avatar, name, login, joined }) => {
	return (
		<div className='profile'>
			<div className='profile__imgContainer'>
				<img src={avatar} alt='' className='profile__imgContainer__image' />
			</div>
			<h2 className='profile__name'>{name ? name : login}</h2>
			<p className='profile__nickname'>@{login}</p>
			<p className='profile__joinDate'>{joined}</p>
		</div>
	)
}

export default Profile
