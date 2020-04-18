import { createContext } from 'react';
import { TodoList } from "../store/todo";

export const StoreContext = createContext(TodoList);
export const StoreProvider = StoreContext.Provider;
