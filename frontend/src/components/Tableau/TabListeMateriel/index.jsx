import React from 'react';
import '../TabStyle.css';;
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import PasDeResultat from '../PasDeResultat/PasDeResultat';
import Loader from '../../Loader/Loader';

const index = ({listeMateriel, showLoader, setRechargerPage}) => {

  const tabLignes = listeMateriel.length  === 0 ? <PasDeResultat /> : listeMateriel.map(materiel => <TabLigne key={materiel.numMateriel} num={materiel.numMateriel} design={materiel.design} prixUnitaire={materiel.prixUnitaire} stock={materiel.stock} setRechargerPage={setRechargerPage} />)

  return (
    <div className="tableau tab-liste-clients">
        <TabLigneTitre />
        {
          showLoader ? <Loader /> : tabLignes
        }
    </div>
  )
}

export default index