import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <p style={props.completed ? { textDecoration: 'line-through' } : null}> {props.task} </p>
        </div >
    );
}

export default Todo