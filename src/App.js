import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots'

import './App.css';



// Each state component must have a render function that returns something

// To add state, must have a constructor

// To use the keyword 'this' you must call super.
// Which basically calls the constructor of the Component obj
class App extends React.Component {
  constructor(){
    super()
  // Set initail state robots as the imported robots array,
  // Set initial state for searchfield as empty str
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

//When input from SearchBox component is changed,
// Call this function.
// Which updates state field as the target.value from event

//onSearchChange needs to be arrow function, since this.state refers to this object,
//Without arrow function, this.state would be trying to get it from input

// Rule of thumb: when you make your own methods on components, make them arrow funcs
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

// We are able to update the robots since when state changes render function is re-ran
  render(){
  // Take this.state.robots array and filter, only the names in the searchbox
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
    {/* Initially filteredRobots is an array of all the robots since
    it initally compare if each robot.name includes a string. Which is obv true */}
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;