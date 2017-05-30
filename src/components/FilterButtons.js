import React, { Component } from "react";
import PropTypes from "prop-types";

const FilterButton = (props) => {     
    if (props.filter === props.children) {
        return <button className="btn btn-primary btn-xs active filter-button">{props.children}</button>
    }
    return <button className="btn btn-primary btn-xs filter-button" {...props} >{props.children}</button>
};



class FilterButtons extends Component {
    constructor() {
        super();
        this.handleShowTodos = this.handleShowTodos.bind(this);
        this.handleToggleAll = this.handleToggleAll.bind(this); 
    }
    handleShowTodos(showText) {
        this.props.onHandleShowTodos(showText)
    }
    handleToggleAll() {
        this.props.onHandleToggleAll();
    }
    render() {
        return(
            <div className="buttons">
                <FilterButton onClick={() => this.handleShowTodos("All")} filter={this.props.filter}>All</FilterButton>
                <FilterButton onClick={() => this.handleShowTodos("Active")} filter={this.props.filter}>Active</FilterButton>
                <FilterButton onClick={() => this.handleShowTodos("Completed")} filter={this.props.filter}>Completed</FilterButton>
                <button className="btn btn-default btn-xs toggleAll-button" onClick={this.handleToggleAll}>Toggle All</button>
            </div>
        );
    }
}

FilterButtons.propTypes = {
    filter: PropTypes.string.isRequired
}

export default FilterButtons;