import React from 'react';
import './InputForm.css';

const InputForm = ({label, name, value, onChangeInput, disabled}) => {

  const handleOnChange = (e) => {
    onChangeInput(state => {
      return {...state, [e.target.name] : e.target.value}
    })

  }
  
  return (
    <div className='input-form'>
        <label>{label}</label>
        <input disabled={disabled} type="text" name={name} value={value} onChange={e => handleOnChange(e)} />
    </div>
  )
}

export default InputForm