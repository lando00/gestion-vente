import React from 'react';

const TabLigne = ({materiel, handleClickIconDelete, handleChangeQuantite}) => {

  return (
    <div className="entree">
        <div className="cellules">
            <span>{materiel.design}</span>
        </div>
        <div className="cellules">
            <span>{materiel.stock}</span>
        </div>
        <div className="cellules">
            <span>{materiel.prixUnitaire} Ar</span>
        </div>
        <div className="cellules">
            <span>
                x <input type='number' value={materiel.quantite} min="1" max={materiel.stock}  onChange={e => {handleChangeQuantite(e, materiel.numMateriel)}} style={{width: '50px', padding: '4px', border: '1px solid #d1cfcf', color: '#333333ad', borderRadius: '3px', outline: 'none'}} />
            </span>
        </div>
        <div className="cellules">
            <span>{materiel.montant} Ar</span>
        </div>
        <div className="cellules"> 
            <span onClick={() => handleClickIconDelete(materiel.numMateriel)}><i className='fas fa-trash-can' style={{color:'#fe3a3a', marginLeft:'25px'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne