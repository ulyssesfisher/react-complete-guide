import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: 'Tom', age: 26 },
      { name: 'Marcus', age: 18 }

    ]
  }

  switchNameHandler = (newName) => {
    console.log('was clicked')

    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Tina', age: 36 },
        { name: 'Marcia', age: 25 }

      ]
    })
  }


nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Jan', age: 23 },
      { name: 'Marcia', age: 25},
      { name:  event.target.value, age: 36 }

    ]
  })
}




  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>State</h1>
        <button 
        style={style}
        onClick={()=> this.switchNameHandler('Jane!!!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click = {this.switchNameHandler.bind(this,"Jane!!")}
          changed={this.nameChangedHandler}>My Hobby: flying drones.</Person>
      </div>
    );
  }
}

export default App;
