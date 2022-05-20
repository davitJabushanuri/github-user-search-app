import React, { useState, useRef } from 'react'
import SearchIcon from '../assets/icon-search.svg'

const Search = ({ setInput }) => {
	const [searchWord, setSearchWord] = useState('')
	const inputRef = useRef()

	const handleInput = e => {
		e.preventDefault()
		setInput(searchWord)
		setSearchWord('')
		inputRef.current.reset()
	}

	return (
		<form ref={inputRef} className='search'>
			<label htmlFor='searchInput' className='search__iconContainer'>
				<img src={SearchIcon} alt='' className='search__iconContainer__icon' />
			</label>
			<input
				onChange={e => setSearchWord(e.target.value)}
				id='searchInput'
				type='text'
				name='search'
				className='search__input'
				placeholder='Search GitHub username...'
			/>
			<p className='search__errorMessage'></p>
			<button onClick={handleInput} className='search__button'>
				Search
			</button>
		</form>
	)
}

export default Search
