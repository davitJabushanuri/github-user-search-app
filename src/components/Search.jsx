import React from 'react'
import SearchIcon from '../assets/icon-search.svg'

const Search = () => {
	return (
		<section className='search'>
			<label for='searchInput' className='search__iconContainer'>
				<img src={SearchIcon} alt='' className='search__iconContainer__icon' />
			</label>
			<input
				id='searchInput'
				type='text'
				name='search'
				className='search__input'
				placeholder='Search GitHub username...'
			/>
			<p className='search__errorMessage'></p>
			<button className='search__button'>Search</button>
		</section>
	)
}

export default Search
