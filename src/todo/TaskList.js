import React from "react";
import { useState } from "react";
import "./todo.css"
export default function TaskList ({
    todos,
    onChangeTodo,
    onDelete
}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    )
}
function Task({todo,onChange,onDelete}) {
    const [isEditing,setIsEditing] = useState(false);
    let todoContent;
    if(isEditing) {
        todoContent = (
            <>
                <input value={todo.title}
                       onChange={e => {
                           onChange({
                               ...todo,
                               title: e.target.value
                           })
                       }}
                    />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    }else{
    todoContent = (
        <>

            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
        </>
    )
    }
    return(
        <label>
            <div>
                <input type="checkBox" checked={todo.done} onChange={e => {onChange({...todo, done: e.target.value});
                }}
                />
                {todo.title}
            </div>
            <div className="btn">
                {todoContent}
                <button onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
            </div>
        </label>
    )
}