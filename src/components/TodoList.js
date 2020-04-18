import React from 'react';
import {useStore} from "../helpers/use-store";
import {useObserver} from "mobx-react";
import {TodoAdd} from "./TodoAdd";


export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (<>
        <div>
            {todoList.getSorted.map(el => {
                return(<p key={el.id}>{el.title}</p>);
            })}
        </div>
        <TodoAdd/>
    </>));
}