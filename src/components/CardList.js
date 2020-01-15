import React from 'react'; 
import Card from './Card';


// Destructures 'props' object which leaves us with robots array
const CardList = ({robots}) => {
  // if(true){
  //   throw new Error('Nooo');
  // }
  return (
    <div>
      {
      // Maps over every item in array, each indiviual item is an object
      // which can be accessed as robot.

      // Cant use forEach since it changes original value
      // we need to return aka make multiple Cards

      // Here we destructure again so we dont have to say 
      // key = {robot.id}
        robots.map(({name, email, id}, index) => {
          return (
            <Card 
              key={index} 
              id={id} 
              name={name} 
              email={email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;