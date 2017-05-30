/* eslint-disable */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from "./components/Box";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todoId: 0,
            filterText: "All"
        };
        
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleChangeTodoCompleted = this.handleChangeTodoCompleted.bind(this);
        this.handleToggleAll = this.handleToggleAll.bind(this);
        this.handleShowTodos = this.handleShowTodos.bind(this);              
    }     
    handleAddTodo(e) {        
        if (e.key === 'Enter' && e.target.value !== "") {
            this.setState({
                 todos: [...this.state.todos, {todoText: e.target.value, id: ++this.state.todoId, completed: false}]
            })                        
        e.target.value = "";
        }
    }
    handleDeleteTodo(e,id) {
        e.stopPropagation();
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }
    handleChangeTodoCompleted(e, id) {
        e.stopPropagation();
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed =  !todo.completed; 
            }
            return todo;
        })
        this.setState({todos: newTodos})
    }
    handleToggleAll() {        
        let totalTodos = this.state.todos.length;
        let completedTodos = 0;
        this.state.todos.map(todo => (todo.completed) ? completedTodos++ : null);       
        this.setState({todos: this.state.todos.map(todo => {            
            if (completedTodos === totalTodos) {
                todo.completed = false; 
            } 
            else {
                todo.completed = true;
            }
            return todo;                                                   
            })
        });       
    }
    handleShowTodos(showText) {       
        this.setState({filterText: showText})       
    }    
    render() {
        let { filterText, todos } = this.state;               
        switch(filterText) {
            case "Active":
                todos = todos.filter(todo => !todo.completed);                                                                                             
                break;
            case "Completed":
                todos = todos.filter(todo => todo.completed);                                                                                                                                                                              
        }
                                                                                    
        return (
            <Box>               
                <AddTodo
                    onHandleAddTodo={this.handleAddTodo} />
                <TodoList
                    onChangeCompleted={this.handleChangeTodoCompleted}
                    onDeleteTodo={this.handleDeleteTodo}
                    todos={todos} />
                <FilterButtons
                    filter={this.state.filterText}
                    onHandleShowTodos={this.handleShowTodos}
                    onHandleToggleAll={this.handleToggleAll} />                
            </Box>
        )
    }
}

render(
  <App />,
  document.getElementById('root')
);
