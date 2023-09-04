import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NouveauVente.css';
import TabEffectuerVente from '../../../components/Tableau/TabEffectuerVente';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import BtnVert from '../../../components/Bouton/BtnVert';
import axios from '../../../helpers/axiosConfig';
import { getMontantTotal } from '../../../utils/utils';
import alerte from '../../../helpers/alerte';

const index = () => {

  const [listeClient, setListeClient] = useState([]);
  const [listeMateriel, setListeMateriel] = useState([]);
  const [idClient, setIdClient] = useState(null);
  const [listeMaterielAcheter, setListeMaterielAcheter] = useState([]);
  const [txtBtn, setTxtBtn] = useState('Valider');

  useEffect(() => {
    axios.get('/client/liste')
      .then((response) => {
        setListeClient(response.data);
        setIdClient(response.data[0].numClient);
      })
      .catch(err => console.log(err))

    axios.get('/materiel/liste')
      .then((response) => {
        for(let i=0; i<response.data.length; i++)
        {
          setListeMateriel(materiel => [...materiel, {...response.data[i], quantite: 1, montant: response.data[i].prixUnitaire}])
        }
      })
      .catch(err => console.log(err))
  }, [])

  const isMaterielExisteDansLaliste = (numMateriel) => {
    const materiel = listeMaterielAcheter.filter(materiel => materiel.numMateriel === numMateriel);
    return materiel.length > 0 
  }

  const handleChangeChoixMateriel = (numMateriel) => {
    if(!isMaterielExisteDansLaliste(numMateriel)){
      const materielSelected = listeMateriel.filter(materiel => materiel.numMateriel === numMateriel);
      setListeMaterielAcheter(materiel => [...materiel, ...materielSelected]);
    }
  }

  const handleClickIconDelete = (numMateriel) => {
    const newListeMaterielAcheter = listeMaterielAcheter.filter(materiel => materiel.numMateriel !== numMateriel); 
    setListeMaterielAcheter(newListeMaterielAcheter);
  }

  const handleChangeQuantite = (e, numMateriel) => {
    const materielSelected = listeMaterielAcheter.filter(materiel => materiel.numMateriel === numMateriel);
    setListeMaterielAcheter(listeMaterielAcheter.filter(materiel => materiel.numMateriel !== numMateriel));
    setListeMaterielAcheter(materiel => [...materiel, {...materielSelected[0], quantite: e.target.value, montant: Number(e.target.value) * materielSelected[0].prixUnitaire }]);
  }

  const validerVente = () => {
    setTxtBtn("En attente...");

    if(listeMaterielAcheter.length > 0){
      listeMaterielAcheter.map(materiel => {
         
      const data = {numClient: idClient, design: materiel.design, quantite: materiel.quantite, stock: materiel.stock};

      if(materiel.stock > materiel.quantite){
        axios.post('/vente/add', data)
          .then(res => { 
            alerte(res.data.type, res.data.message);
            setTxtBtn("Valider");
            setListeMaterielAcheter([]);
          })
          .catch(err => console.log(err))
        }else{
          alerte("warning", "Stock epuisé");
        }
      })
        
    }else{
      alerte("warning", "Veuillez choisir un matériel !"); 
    }
          
    setTxtBtn("Valider");  
  }

  return (
    <div className='effectuer-vente'>
      <div className='info-clients nouveau-vente'>
        <p>N°CLIENTS : <span>{idClient}</span></p>
        <div className="annee">
          <p>NOM CLIENT : </p>
          <select onChange={e => setIdClient(e.target.value)}>
            {
              listeClient?.map(client => <option value={client.numClient}>{client.nom} {client.prenom}</option>)
            }
          </select>
        </div> 
      </div>
      <p className='label-choix-materiel'>SELECTIONNER UN MATERIEL : </p>
      <select className='choix-materiel' onChange={e => handleChangeChoixMateriel(e.target.value)}>
        {
          listeMateriel?.map(materiel => <option key={materiel.numMateriel} value={materiel.numMateriel}>{materiel.design}</option>)
        }
      </select>

      <TabEffectuerVente 
          listeMaterielAcheter={listeMaterielAcheter} 
          setListeMaterielAcheter={setListeMaterielAcheter} 
          handleClickIconDelete={handleClickIconDelete}
          handleChangeQuantite={handleChangeQuantite}
      />

      <div className="footer">
          <p className='somme-total'>SOMME TOTAL : <span>{getMontantTotal(listeMaterielAcheter)} Ar</span></p>
          <div className="btn">
          <BtnRouge>
            <Link to="/app/ventes/liste">Annuler</Link>
          </BtnRouge>
            <BtnVert enregistrer={validerVente}>{txtBtn}</BtnVert>
          </div>
      </div>
    </div>
  )
}

export default index