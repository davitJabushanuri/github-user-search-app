import React from 'react'

const Stats = () => {
	return (
		<div className='stats'>
			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Repos</h4>
				<h3 className='stats__flex__number'>8</h3>
			</div>
			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Followers</h4>
				<h3 className='stats__flex__number'>3938</h3>
			</div>

			<div className='stats__flex'>
				<h4 className='stats__flex__header'>Following</h4>
				<h3 className='stats__flex__number'>9</h3>
			</div>
		</div>
	)
}

export default Stats
