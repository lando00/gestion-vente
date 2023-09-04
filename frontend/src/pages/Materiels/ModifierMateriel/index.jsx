import React, {useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm/InputForm';
import InputNumberForm from '../../../components/InputForm/InputNumberForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';

const index = () => {

  const {id} = useParams();
  const [materiel, setMateriel] = useState({});
  const [txtBtn, setTxtBtn] = useState('Modifier');
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get(`/materiel/${id}`)
      .then((reponse) => {
        setMateriel(reponse.data);
      })
  }, []);

  const enregistrer = () => {
    setTxtBtn('En attente...');
    axios.put(`/materiel/update/${id}`, materiel)
      .then(rep => {
        alerte(rep.data.type, rep.data.message);
        if(rep.data.type === 'success'){
          navigate('/materiels/liste')
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
        <InputForm label="N°Materiel" value={materiel.numMateriel} name="numMateriel" onChangeInput={setMateriel} />
        <InputForm label="Design" value={materiel.design} name="design" onChangeInput={setMateriel} />
        <InputNumberForm label="Prix unitaire(Ar)" name="prixUnitaire" value={materiel.prixUnitaire} onChangeInput={setMateriel} />
        <InputNumberForm label="Stock" name="stock" value={materiel.stock} onChangeInput={setMateriel} />
        <div className="btn-group">
          <BtnRouge>
            <Link to="/app/materiels/liste">Annuler</Link>
          </BtnRouge>
          <BtnVert enregistrer={enregistrer}>{txtBtn}</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index