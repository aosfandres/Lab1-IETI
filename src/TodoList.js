import React from 'react';
import {Todo} from './Todo.js';

class TodoList extends React.Component{
    render(){
        var keyId=0;
        
        return this.props.todoList.map((val) => (
        <Todo      
            key={keyId++} text={val.text} priority={val.priority} dueDate={val.dueDate.toString()}
        />

        ));
    }
}
export default TodoList;

