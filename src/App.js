import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Simple from './Simple';

class App extends Component {

  state ={
    msg:1
  }
  handle = ()=>{
    let v = this.state.msg;
    v++;
    this.setState({msg:v})
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handle.bind()}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Simple message={this.state.msg}>Simple</Simple>
            Learn React
          
        </header>
      </div>
    );
  }
}

export default App;
