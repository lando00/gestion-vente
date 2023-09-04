import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NouveauClients.css';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';

const index = () => {

  const [client, setClient] = useState({
    numClient : "",
    nom : "",
    prenom : "",
    tel : ""
  });

  const [txtBtn, setTxtBtn] = useState('Enregistrer');
  const [idLastClient, setIdLastClient] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios.get('/client/liste')
      .then((rep) => {
        setIdLastClient(rep.data[rep.data.length-1].numClient);
      })
  }, [])

  useEffect(() => {
    let idNewClient = Number(idLastClient.slice(2)) + 1;
    idNewClient = "CL" + idNewClient.toString();
    setClient(client => {
      return {...client, numClient: idNewClient}
    })
  }, [idLastClient])

  const enregistrer = () => {
    setTxtBtn('En attente...');
    axios.post('/client/add', client)
      .then(rep => {
        alerte(rep.data.type, rep.data.message);
        if(rep.data.type === 'success'){
          setClient({numClient: "", nom: "", prenom: "", tel: ""})
        }
        setTxtBtn('Enregistrer');
        nav("/app/clients/liste");
      }).catch(() => {
        alerte("error", "Erreur, réessayer svp !");
        setTxtBtn('Enregistrer')
      })
  }

  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Client" name="numClient" value={client.numClient} onChangeInput={setClient} disabled={true} />
        <InputForm label="Nom" name="nom" value={client.nom} onChangeInput={setClient} disabled={false} />
        <InputForm label="Prénom(s)" name="prenom" value={client.prenom} onChangeInput={setClient} disabled={false} />
        <InputForm label="Téléphone" name="tel" value={client.tel} onChangeInput={setClient} disabled={false} />
        <div className="btn-group">
          <BtnRouge>
            <Link to="/app/clients/liste">Annuler</Link>
          </BtnRouge>
          <BtnVert enregistrer={enregistrer}>{txtBtn}</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index