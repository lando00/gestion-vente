import React from 'react';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import './TabChiffreAffaire.css';
import '../TabStyle.css';
import Loader from '../../Loader/Loader';

const index = ({chiffreAffaire}) => {
  return (
    <div className="tableau tab-chiffre-affaire">
        <TabLigneTitre />
        {
         chiffreAffaire.length > 0 ? chiffreAffaire.map(ca => <TabLigne key={ca.numClient} numClient={ca.numClient} nomClient={ca.nom} prenomClient={ca.prenom} montant={ca.montant} /> ) : <Loader />
        }
       
    </div>
  )
}

export default index