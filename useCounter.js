import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

 const [counter, setCounter] = useState( initialValue );

 const increment = ( value = 1 ) => {
    // El value nos dice en cuanto va a incrementar el contador
    setCounter( (current) => current + value );
 }
 const reset = () => {
    setCounter( initialValue );
 }
 const decrement = ( value = 1 ) => {
    
    if (counter === 0) return; // El contador no puede ser menor a 0
    setCounter( (current) => current - value );
 }

 return {
 /* Vamos a mandar al componente el counter y exponer las funciones que cambian el estado */
    counter,
    increment,
    reset,
    decrement
 }

}