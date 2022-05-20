import React from 'react'
import locationIcon from '../assets/icon-location.svg'
import linksIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

const Links = ({ location, blog, twitter, company }) => {
	return (
		<div className='links'>
			<div className='links__flex'>
				<img src={locationIcon} alt='' className='links__flex__img' />
				{location ? (
					<div className='links__flex__header'>{location}</div>
				) : (
					<div className='links__flex__header opacity'>Not Available</div>
				)}
			</div>
			<div className='links__flex'>
				<img src={linksIcon} alt='' className='links__flex__img' />
				{blog ? (
					<a href={blog ? blog : '#'} className='links__flex__header'>
						{blog}
					</a>
				) : (
					<div className='links__flex__header opacity'>Not Available</div>
				)}
			</div>

			<div className='links__flex'>
				<img src={twitterIcon} alt='' className='links__flex__img' />
				{twitter ? (
					<a
						href={twitter && `https://twitter.com/${twitter}`}
						className='links__flex__header'
					>
						{twitter}
					</a>
				) : (
					<div className='links__flex__header opacity'>Not Available</div>
				)}
			</div>

			<div
				href={company && `https://github.com/${company.substring(1)}`}
				className='links__flex'
			>
				<img src={companyIcon} alt='' className='links__flex__img' />
				{company ? (
					<a
						href={company && `https://github.com/${company.substring(1)}`}
						className='links__flex__header'
					>
						{company}
					</a>
				) : (
					<div className='links__flex__header opacity'>Not Available</div>
				)}
			</div>
		</div>
	)
}

export default Links
