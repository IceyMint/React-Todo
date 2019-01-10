// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
const TodoList = (props) => {
    return (
        <div>
            {props.taskData.map((todo, index) => (
                <Todo todo={todo} key={index} completed={todo.completed} handleClickComplete={props.handleClickComplete} />
            ))}
        </div>
    );
}

export default TodoList