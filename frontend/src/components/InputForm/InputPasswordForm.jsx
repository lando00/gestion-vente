import React from 'react';
import './InputForm.css';

const InputPasswordForm = ({label, name, value, onChangeInput}) => {

  const handleOnChange = (e) => {
    onChangeInput(state => {
      return {...state, [e.target.name] : e.target.value}
    })

  }

  return (
    <div className='input-form'>
        <label>{label}</label>
        <input type="password" name={name} value={value} onChange={e => handleOnChange(e)} />
    </div>
  )
}

export default InputPasswordForm