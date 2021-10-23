import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategorias, categorias = [] }) => {

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const encontrado = categorias.find(item => item === inputValue);

    if (inputValue.trim().length > 2 && !encontrado) {
      setCategorias( [inputValue,...categorias]);
    }
    setInputValue("");
    console.log("input:", inputValue);
  }

  return (
    <form onSubmit={ handleSubmit}>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleOnChange }
      />
    </form>
  )
}


AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
  categorias: PropTypes.array.isRequired    
}; 
