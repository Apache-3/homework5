import React from "react";
import {useState} from "react";
import AddTodo from "./addTodo";
import TaskList from "./TaskList";
import "./todo.css"

let nextId = 3;
const initialTodos = [
    {id: 0, title:'Купить молока',done: true},
    {id: 1, title:'Купить Сыра',done: false},
    {id: 2, title:'Купить Хлеба',done: true}
]

export default function TaskApp() {
    const [todos,setTodos] = useState(initialTodos)

    function handleAddTodos(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleChangeTodos(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            }else{
                return t;
            }
        })
        );
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }
    return (
        <div className="todos">
        <AddTodo onAddTodo={handleAddTodos}/>
        <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodos}
            onDelete={handleDeleteTodo}
        />
        </div>
    )


}