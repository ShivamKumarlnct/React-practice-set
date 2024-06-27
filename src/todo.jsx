import React, { useState } from "react";

function Todolist(){
    const [todo, setTodo] = useState([{task: "sample", id: 1, isdone: false}]);
    const [newTodo, setNewTodo] = useState("");
    const [count, setCount] = useState(2);

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodo([...todo, {task: newTodo, id: count, isdone: false}]);
            setNewTodo("");
            setCount(count + 1);
        }
    };

    const removeTodo = (id) => {
        setTodo(todo.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>ENTER TASK</h1>
            <input 
                type="text"
                placeholder="enter value"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>ADD</button>
            <h2>REMOVE TASK</h2>
            <ul>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => removeTodo(todo.id)}>REMOVE</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;

