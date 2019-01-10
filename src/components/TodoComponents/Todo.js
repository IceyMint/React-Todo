import React from 'react';

const Todo = (props) => {
    return (
        <p onClick={(e) => props.handleClickComplete(props.todo.id)} style={props.completed ? { textDecoration: 'line-through' } : null}> {props.todo.task} </p>
    );
}

export default Todo