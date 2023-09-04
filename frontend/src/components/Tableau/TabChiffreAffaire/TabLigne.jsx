import React from 'react';

const TabLigne = ({numClient, nomClient, prenomClient, montant}) => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>{numClient}</span>
        </div>
        <div className="cellules">
            <span>{nomClient} {prenomClient}</span>
        </div>
        <div className="cellules">
            <span>{montant} Ar</span>
        </div>
    </div>

  )
}

export default TabLigne