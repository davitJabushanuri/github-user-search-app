import React from 'react'
import locationIcon from '../assets/icon-location.svg'
import linksIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

const Links = () => {
	return (
		<div className='links'>
			<div className='links__flex'>
				<img src={locationIcon} alt='' className='links__flex__img' />
				<h2 className='links__flex__header'>San Francisco</h2>
			</div>
			<div className='links__flex'>
				<img src={linksIcon} alt='' className='links__flex__img' />
				<a href='#' className='links__flex__header'>
					https://github.blog
				</a>
			</div>
			<div className='links__flex'>
				<img src={twitterIcon} alt='' className='links__flex__img' />
				<a href='#' className='links__flex__header'>
					Not Available
				</a>
			</div>
			<div className='links__flex'>
				<img src={companyIcon} alt='' className='links__flex__img' />
				<a href='#' className='links__flex__header'>
					@github
				</a>
			</div>
		</div>
	)
}

export default Links
