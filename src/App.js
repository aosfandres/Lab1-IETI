import logo from './logo.svg';
import './App.css';
import React from "react";
import TodoApp from "./TodoApp";

class App extends React.Component {


  //const todos = [{ text: "Learn React", priority: 5, dueDate: new Date() },
  //{ text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23) },
  //{ text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }];



  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;