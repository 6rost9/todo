import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from "./helpers/store-provider";
import {TodoList} from "./store/todo";

import * as serviceWorker from './serviceWorker';

const todoList = new TodoList();


ReactDOM.render(
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
