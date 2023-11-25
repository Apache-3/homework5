import React from "react";
import { useState } from "react";
import "./todo.css"

export default function AddTodo({onAddTodo}) {
    const [title,setTitle] = useState("");

    return(
        <div className="addTodo">
        <input
            placeholder="Add Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(title);
                }}
            >
               Add Task
            </button>
        </div>
    )
}