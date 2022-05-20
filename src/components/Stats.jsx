import React from 'react'

const Stats = ({ repos, followers, following }) => {
	return (
		<div className='stats'>
			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Repos</h4>
				<h3 className='stats__flex__number'>{repos}</h3>
			</div>
			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Followers</h4>
				<h3 className='stats__flex__number'>{followers}</h3>
			</div>

			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Following</h4>
				<h3 className='stats__flex__number'>{following}</h3>
			</div>
		</div>
	)
}

export default Stats
