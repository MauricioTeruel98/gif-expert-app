import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorys}/*Destructuracion de los argumentos del componente*/ ) => {

    const [inputValue, setInputValue] = useState(''); //useState() si lo dejamos asi el valor será undefined

    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategorys( cats => [ inputValue, ...cats] );
            setInputValue('');

        }

        //console.log('Submit hecho')
        //setCategory

    }

    return (
        <>
          <form onSubmit={handleSubmit}>

          <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />

            </form>  
        </>
    )
}

AddCategory.propTypes = {
    setCategorys: PropTypes.func.isRequired
}

export default AddCategory;
