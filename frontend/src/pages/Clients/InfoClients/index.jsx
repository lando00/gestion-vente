import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './InfoClients.css'
import FiltreTab from '../../../components/FiltreTab/FiltreTab'
import TabMaterielAcheter from '../../../components/Tableau/TabMaterielAcheter'
import BtnRouge from '../../../components/Bouton/BtnRouge'
import axios from '../../../helpers/axiosConfig'

const index = () => {

  const [infoClient, setInfoClient] = useState({});
  const [listeMateriel, setListeMateriel] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    getListeTousLesMateriels();    
    axios.get(`/client/${id}`)
      .then(response => {
        setInfoClient(response.data);
      })
  }, [])

  const chiffreAffaireTotal = () => {
    return listeMateriel.reduce((acc, obj) => acc + obj.montant, 0)
  }

  const getListeTousLesMateriels = () => {
    axios.get(`/client/info_client/${id}`)
      .then(response => {
        setListeMateriel(response.data);
        setShowLoader(false);
      })
  }

  const getListeMaterielParMois = (m) => {
    if(m != "0"){
      axios.get(`/materiel/filtrer_par_mois/${id}/${m}`)
      .then(response => {
        setListeMateriel(response.data);
      })
    }else{
      getListeTousLesMateriels();
    }
  }

  const getListeMaterielParAnnee = (m) => {
    if(m != "aaaa"){
      axios.get(`/materiel/filtrer_par_annee/${id}/${m}`)
      .then(response => {
        setListeMateriel(response.data);
      })
    }else{
      getListeTousLesMateriels();
    }
   
  }

  const getListeMaterielParDate = (date1, date2) => {
      axios.get(`/materiel/filtrer_par_date/${id}/${date1}/${date2}`)
      .then(response => {
        setListeMateriel(response.data);
      })
   
  }
 
  return (
    <div className='info-clients'>
        <p>N°CLIENTS : <span>{infoClient?.numClient}</span></p> 
        <p>NOM CLIENT : <span>{infoClient?.nom} {infoClient?.prenom}</span></p>
        <p>LISTES DES MATERIELS ACHETES : </p>
        <FiltreTab listeMaterielParMois={getListeMaterielParMois} getListeMaterielParAnnee={getListeMaterielParAnnee} getListeMaterielParDate={getListeMaterielParDate} />
        <TabMaterielAcheter listeMateriel={listeMateriel} showLoader={showLoader} />
        <div className="footer">
          <p className='somme-total'>SOMME TOTAL : <span>{chiffreAffaireTotal()} Ar</span></p>
        </div>
    </div>
  )
}

export default index