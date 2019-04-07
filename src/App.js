import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Tom', age: 26 },
      { name: 'John', age: 18 }
      

    ]
  }

  switchNameHandler = () => {
    console.log('was clicked')
    this.setState({
      persons: [
        { name: 'Jack', age: 28 },
        { name: 'Tom', age: 26 },
        { name: 'John', age: 180 }

      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobby: flying drones.</Person>
        <Person name="tom" age="56" />
      </div>
    );
  }
}

export default App;
