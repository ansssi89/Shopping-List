import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddItem from './components/AddItem';

import './App.css';
import axios from 'axios';

class App extends Component {
  state= {
    items: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }



  
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem AddItem={this.AddItem}/>
      </div>
    );
  }
  
}

export default App;
