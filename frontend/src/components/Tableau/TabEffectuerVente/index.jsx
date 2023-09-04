import React from 'react';
import '../TabStyle.css';
import './TabEffectuerVente.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import PasDeResultat2 from '../PasDeResultat/PasDeMateriel2'

const index = ({listeMaterielAcheter, handleClickIconDelete, handleChangeQuantite}) => {
  return (
    <div className="tableau tab-liste-clients tab-liste-vente">
        <TabLigneTitre />
        {
          listeMaterielAcheter.length > 0 ? listeMaterielAcheter.map(materiel => <TabLigne materiel={materiel} handleClickIconDelete={handleClickIconDelete} handleChangeQuantite={handleChangeQuantite} />) : <PasDeResultat2 /> 
        }
        
    </div>
  )
}

export default index