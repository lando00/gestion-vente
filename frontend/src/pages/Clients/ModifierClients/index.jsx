import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte'

const index = () => {

  const {id} = useParams();
  const [client, setClient] = useState({});
  const [txtBtn, setTxtBtn] = useState('Modifier');
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get(`/client/${id}`)
      .then((reponse) => {
        setClient(reponse.data);
      })
  }, []);

  const enregistrer = () => {
    setTxtBtn('En attente...');
    axios.put(`/client/update/${id}`, client)
      .then(rep => {
        alerte(rep.data.type, rep.data.message);
        if(rep.data.type === 'success'){
          navigate('/clients/liste')
        }
        setTxtBtn('Modifier');
      }).catch(() => {
        alerte("error", "Erreur, réessayer svp !");
        setTxtBtn('Modifier')
      })
  }

  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Client" name="numClient" value={client.numClient} onChangeInput={setClient} />
        <InputForm label="Nom" name="nom" value={client.nom} onChangeInput={setClient} />
        <InputForm label="Prénom(s)" name="prenom" value={client.prenom} onChangeInput={setClient} />
        <InputForm label="Téléphone" name="tel" value={client.tel} onChangeInput={setClient} />
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