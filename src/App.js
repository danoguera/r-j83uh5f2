import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.counter = this.counter.bind(this);
    this.state = { 
      length: 0 
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={(e) => this.counter(e)}>{this.state.value}</textarea>
        <div className="counter">{this.state.length}</div>
      </div>
    );
  }

  counter(e){
    this.setState({ length: e.target.value.length })
  }
}

export default App;
