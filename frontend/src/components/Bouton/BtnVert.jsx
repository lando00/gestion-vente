import React from 'react';
import './Btn.css';

const BtnVert = ({children, enregistrer}) => {
  return (
    <button className='btn btn-vert' onClick={enregistrer}>{children}</button>
  )
}

export default BtnVert