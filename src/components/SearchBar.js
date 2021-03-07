import React, { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {

  const [keyword, setKeyword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(keyword);
  }

  return (
    <div className='ui segment search-bar'>
      <form className='ui form' onSubmit={handleFormSubmit}>
        <div className='ui field'>
          <label>Video Search: </label>
          <input
          type='text'
          onChange={(e)=>setKeyword(e.target.value)}
          value={keyword}
          />
        </div>
      </form>
    </div>
  )
}


export default SearchBar;
