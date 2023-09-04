import React from 'react';
import '../TabStyle.css';;
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import Loader from '../../Loader/Loader'

const index = ({listeMaterielVendu}) => {
  return (
    <div className="tableau tab-liste-clients">
        <TabLigneTitre />
        {
          listeMaterielVendu ? listeMaterielVendu.map(materiel => <TabLigne materiel={materiel} />) : <Loader />
        }
        
    </div>
  )
}

export default index