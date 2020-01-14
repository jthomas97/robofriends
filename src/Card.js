import React from 'react';

// index.js passes robots array aka 'props' to CardList.js
// CardList.js passes individual robots to Card
// Card function accepts them as paramaters and destructures them
// since they are passed as a object
// So you dont have to do props.name props.email etc...
const Card = ({name, email, id}) => {
  return (
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robot' / >
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;