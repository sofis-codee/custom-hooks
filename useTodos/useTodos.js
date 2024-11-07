import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    // EL PARSE ES EL OPUESTO AL STRINGIFY
    // si es null se agrega un arreglo vacío (|| [])
    return JSON.parse(localStorage.getItem('todos')) || [];
} 
export const useTodos = () => {
   
    // Almacena el estado de todos en localStorage cada vez que cambia
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo', // Asegúrate de que el tipo de acción sea correcto
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo', // Alterna el estado 'done' del todo
            payload: id,
        });
    }
return{
    todos,
    todosCount : todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
}
}
