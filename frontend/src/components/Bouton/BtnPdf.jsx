import React from 'react';
import './Btn.css';

const BtnPdf = ({children, enregistrer}) => {
  return (
    <button className='btn btn-vert' onClick={enregistrer}>{children}</button>
  )
}

export default BtnPdf