import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {

  state = {
    list: []
  }

  addItem = (item) => {
    const {list} = this.state
    this.setState({list: [...list, item]})
  }

  render() {
    return (
      <div className="App">
        <Form addItem={this.addItem}/>
        <List list={this.state.list}/>



          
      </div>
    );
  }
}

export default App;
