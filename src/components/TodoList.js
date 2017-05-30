import React, { Component} from "react";
import PropTypes from "prop-types";

class TodoList extends Component {
    render() {
        let { todos } = this.props;
        let labelStyle = {color: "#999", textDecoration: "line-through"};        
        return (
            <ul className="list-group todo-list">            
                {todos.map((todo, i) => 
                    <li key={i} className="list-group-item todo-list-item" onClick={(e) => this.props.onChangeCompleted(e, todo.id)}>                                       
                        {todo.completed ? <label style={labelStyle} >{todo.todoText}</label> : <label>{todo.todoText}</label>}
                        <i className="fa fa-times" onClick={(e) => this.props.onDeleteTodo(e, todo.id)}></i>                        
                    </li>
                )}               
            </ul>
        );
    }            
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onChangeCompleted: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
}



export default TodoList