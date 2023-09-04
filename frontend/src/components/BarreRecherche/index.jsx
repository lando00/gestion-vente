import React from 'react';
import './BarreRecherche.css';

const index = ({placeholder, rechercher}) => {
  return (
    <div className='barre-recherche'>
        <i className='fab fa-sistrix'></i>
        <input type="search" placeholder={`Rechercher un ${placeholder}...`} onChange={e => {rechercher(e.target.value)}} />
    </div>
  )
}

export default index