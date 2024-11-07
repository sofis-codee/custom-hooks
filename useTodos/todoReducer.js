export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Agrega el nuevo todo al estado
            return [...initialState, action.payload]; 
        
        case '[TODO] Remove Todo':
            // Elimina el todo que coincide con el id
            return initialState.filter(todo => todo.id !== action.payload); 
        
        case '[TODO] Toggle Todo':
            // Alterna el estado 'done' del todo
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done // Cambia el estado de 'done'
                    };
                }
                return todo; // Retorna el todo sin cambios
            });
        
        default:
            // Devuelve el estado actual si la acción no es reconocida
            return initialState; 
    }
}
