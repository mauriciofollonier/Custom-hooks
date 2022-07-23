import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodos = ( initialState = [] ) => {

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' )) || [];
    }
    
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    
    // Para que la info perdure, tenemos que disparar un efecto
    // secundario al modificar los 'todos' y guardarla en el 
    // localStorage
    useEffect(() => {
      // localStorage solo guarda info de tipo string, por eso 
      // convertimos el obj 'todos' en string  
      localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [ todos ]);

    const handleNewTodo = ( todo ) => {
    // Agregar nuevo todo
    // Creo la acción
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
    // Envío la acción al reducer
        dispatch( action );
    }

    // Al hacer click en el boton 'Eliminar' se va a disparar
    // esta acción y va a extraer su id para enviarselo al reducer.
    const handleDeleteTodo = ( id ) => {
    //console.log ( {id} )
    // Eliminar todo    
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    
    const handleToggleTodo = ( id ) => {
    // Cambiar estado del "done" en los todos
    // console.log( {id} )
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
 
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length
  }
}