import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = ({robots}) => {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots}/>
    </div>
  );
}

export default App;