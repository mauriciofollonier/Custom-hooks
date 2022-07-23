import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {

        const { name, value } = target;
    
            setFormState({
                ...formState,
                [ name ] : value
            })
        }
    
    const onResetForm = () => {
      
        setFormState( initialForm );

    }

  return {
    // Si exponemos tambien todo el estado de formState asi '...formState'
    // Podemos acceder a todas las propiedades del objeto y no tener que desestructurar en el componente
    ...formState,
    formState,
    onInputChange,
    onResetForm    
  }
}
