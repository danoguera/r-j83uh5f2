import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleKey = this.handleKey.bind(this);
    this.state = { value: null }
  }

  render() {
    let length = this.state.value ? this.state.value.length : 0;
    return (
      <div className="container">
        <textarea rows="3" onChange={(e) => this.handleKey(e)}>{this.state.value}</textarea>
        <div className="counter">{length}</div>
      </div>
    );
  }

  handleKey(e){
    this.setState({ value: e.target.value.length })
  }
}

export default App;
