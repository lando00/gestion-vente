import React, { useEffect, useState } from 'react';
import './ListeClients.css';
import BarreRecherche from '../../../components/BarreRecherche/index';
import TabListeClients from '../../../components/Tableau/TabListeClients';
import axios from '../../../helpers/axiosConfig';

const index = () => {

  const [listeClient, setListeClient] = useState([]);
  const [clientRechercher, setClientRechercher] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [rechargerPage, setRechargerPage] = useState(false);

  useEffect(() => { 
    axios.get('/client/liste')
      .then((reponse) => {
        setListeClient(reponse.data);
        setShowLoader(false);
      })
  }, [rechargerPage]);


  const listeClientFiltrer = (clientRechercher) => {

    let resultatRecherche = listeClient.filter(client => client.numClient.toLowerCase().includes(clientRechercher.toLowerCase()) ||  client.nom.toLowerCase().includes(clientRechercher.toLowerCase()) ||  client.prenom.toLowerCase().includes(clientRechercher.toLowerCase()) ||  client.tel.toLowerCase().includes(clientRechercher.toLowerCase()));

    return clientRechercher ? resultatRecherche : listeClient;
  }

  return (
    <div className='liste-clients'>
      <BarreRecherche placeholder="client" rechercher={setClientRechercher} />
      <TabListeClients listeClient={listeClientFiltrer(clientRechercher)} showLoader={showLoader} setRechargerPage={setRechargerPage} />
    </div>
  )
}

export default index