import React from 'react';
import '../TabStyle.css';
import './TabListeVente.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import PasDeResultat from '../PasDeResultat/PasDeResultat';
import Loader from '../../Loader/Loader';

const index = ({listeVente, showLoader, setRechargerPage}) => {

  const tabLignes = listeVente.length  === 0 ? <PasDeResultat /> : listeVente.map(vente => <TabLigne key={vente.numVente} numVente={vente.numVente} nomClient={vente.nomClient} materiel={vente.materiel} montant={vente.montant} quantite={vente.quantite} prixUnitaire={vente.prixUnitaire} date={vente.date} setRechargerPage={setRechargerPage} />)

  return (
    <div className="tableau tab-liste-clients tab-liste-vente">
        <TabLigneTitre />
        {
          showLoader ? <Loader /> : tabLignes
        }
    </div>
  )
}

export default index