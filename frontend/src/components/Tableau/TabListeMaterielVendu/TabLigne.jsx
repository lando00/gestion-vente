import React from 'react';

const TabLigne = ({materiel}) => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>{materiel.numMateriel}</span>
        </div>
        <div className="cellules">
            <span>{materiel.design}</span>
        </div>
        <div className="cellules">
            <span>{materiel.prixUnitaire} Ar</span>
        </div>
        <div className="cellules">
            <span>{materiel.quantite}</span>
        </div>
        <div className="cellules"> 
            <span>{materiel.montant} Ar</span>
        </div>  
    </div>

  )
}

export default TabLigne