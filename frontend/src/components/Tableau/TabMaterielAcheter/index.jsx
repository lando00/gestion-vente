import React from 'react';
import '../TabStyle.css';
import './TabMaterielAcheter.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import PasDeMateriel from '../PasDeResultat/PasDeMateriel';
import Loader from '../../Loader/Loader';

const index = ({listeMateriel, showLoader}) => {
  return (
    <div className="tableau tab-materiel-acheter">
        <TabLigneTitre />
        {
         showLoader ? <Loader /> : listeMateriel.length > 0 ? listeMateriel.map(materiel => <TabLigne numMateriel={materiel.numMateriel} design={materiel.design} prixUnitaire={materiel.prixUnitaire} quantite={materiel.quantite} montant={materiel.montant} date={materiel.date} />) : <PasDeMateriel />
        }
        
    </div>
  )
}

export default index