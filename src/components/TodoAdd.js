import React, { useState }  from 'react';
import {useStore} from "../helpers/use-store";

export const TodoAdd = () => {
    const [title, setTitle] = useState('');

    const todoList = useStore();

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = () => {
        todoList.add({
            title,
            done: false,
        })
        setTitle('');
    }

    return (<>
        <input value={title} onChange={handleChange}/>
        <button onClick={addTodo}>Add</button>
    </>);
}