import React from 'react';
import '../TabStyle.css';
import './TabListeClients.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import Loader from '../../Loader/Loader';
import PasDeResultat from '../PasDeResultat/PasDeResultat';

const index = ({listeClient, showLoader, setRechargerPage}) => {

  const tabLignes = listeClient.length  === 0 ? <PasDeResultat /> : listeClient.map(client => <TabLigne key={client.numClient} num={client.numClient} nom={client.nom} prenom={client.prenom} tel={client.tel} setRechargerPage={setRechargerPage} />)

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