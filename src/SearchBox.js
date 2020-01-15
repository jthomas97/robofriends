import React from 'react';


// searchChange is a function that is passed to component SearchBox
const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        type='search' 
        placeholder='search robots' 
        className='pa3 ba b--green bg-lightest-blue'
      // Basic HTML, when input field is changed, call function searchChange
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;