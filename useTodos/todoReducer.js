

export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {

    case '[TODO] Add Todo':
        return [
          ...initialState,
          action.payload
        ];

    // En el payload vamos a recibir el id del 'todo' a eliminar
    // retornamos un nuevo arreglo (filter) con todos los 'todos'
    // que tengan un id diferente al recibido.
    case '[TODO] Remove Todo':
      return initialState.filter( todo => todo.id != action.payload);

    case '[TODO] Toggle Todo':
      return initialState.map( todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      });

    default:
        return initialState;
  }


}