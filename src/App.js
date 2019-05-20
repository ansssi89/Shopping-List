import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

import './App.css';
import axios from 'axios';

class App extends Component {
  state= {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
    .then(res => this.setState({todos: res.data}))
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
  }


  render() {
    return (
      <div className="App">
        <Header />
        <React.Fragment>
        <AddTodo AddTodo={this.AddTodo}/>
        <Todos 
        todos={this.state.todos}
        markComplete={this.markComplete}
        delTodo={this.delTodo}
        />
        </React.Fragment>
        
      </div>
    );
  }
  
}

export default App;
