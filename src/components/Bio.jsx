import React from 'react'

const Bio = ({ bio }) => {
	return (
		<div className='bio'>
			<p className='bio__paragraph'>{bio ?? 'This profile han no bio'}</p>
		</div>
	)
}

export default Bio
