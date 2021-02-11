import React from 'react';
import { TodoList } from './TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { text: "Learn React", priority: 5, dueDate: new Date() },
                { text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23) },
                { text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }],
            text: '',
            priority: '',
            dueDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>

                    <br></br>
                    <input
                        id="text"
                        placeholder="ingresa el quehacer"
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <input
                        id="priority"
                        placeholder="ingresa la prioridad"
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <button>
                        Add ToDo
                    </button>
                    <br></br>
                    <h2>List</h2>
                    <TodoList todoList={this.state.items} />
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleChangePriority(e) {
        this.setState({ priority: e.target.value });
    }

    handleChangeDueDate(e) {
        this.setState({ dueDate: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: new Date()
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));

    }
}

export default TodoApp;