import React from "react";

const AddTodo = (props) => {
    return <input type="text" className="form-control addTodo" onKeyPress={props.onHandleAddTodo} placeholder="What needs to be done" />
}

export default AddTodo;