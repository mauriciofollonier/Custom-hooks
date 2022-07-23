import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: true
    });
     
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });
     
        const resp = await fetch( url );
        const data = await resp.json();

        
        setState({
            data,
            isLoading: false,
            hasError: null
        })
     
    }

    useEffect(() => {
        getFetch();
    }, [ url ])
    

// Definimos de que forma vamos a retornar el state, que despues va a utilizar el componente MultipleCustomHooks
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
