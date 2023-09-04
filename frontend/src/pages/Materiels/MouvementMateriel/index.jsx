import React, {useState, useEffect} from 'react';
import FiltreTab from '../../../components/FiltreTab/FiltreTab';
import TabListeMateriel from '../../../components/Tableau/TabListeMateriel';
import axios from '../../../helpers/axiosConfig'

const index = () => {

  const [listeMateriel, setListeMateriel] = useState([]);
  const [materielRechercher, setMaterielRechercher] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [rechargerPage, setRechargerPage] = useState(false);

  useEffect(() => { 
    axios.get('/materiel/liste')
      .then((reponse) => {
        setListeMateriel(reponse.data);
        setShowLoader(false);
      })
  }, [rechargerPage]);


  const listeMaterielFiltrer = (materielRechercher) => {

    let resultatRecherche = listeMateriel.filter(materiel => materiel.numMateriel.toLowerCase().includes(materielRechercher.toLowerCase()) ||  materiel.design.toLowerCase().includes(materielRechercher.toLowerCase()));

    return materielRechercher ? resultatRecherche : listeMateriel;
  }

  const getListeMaterielParMois = (m) => {
    if(m != "0"){
      axios.get(``)
      .then(response => {
        
      })
    }else{
      getListeTousLesMateriels();
    }
  }

  const getListeMaterielParAnnee = (m) => {
    if(m != "aaaa"){
      axios.get(``)
      .then(response => {
        
      })
    }else{
      getListeTousLesMateriels();
    }
   
  }

  const getListeMaterielParDate = (date1, date2) => {
      axios.get(``)
      .then(response => {
        console.log(response)
        
      })
   
  }

  return (
    <div className='chiffre-affaire' >
      <div className="annee" style={{justifyContent: 'flex-start', marginBottom:'30px', paddingLeft:'25px'}}>
        <span>Type de mouvement : </span>
        <select>
          <option>Entrée</option>
          <option>Sortie</option>
        </select>
      </div>
      <FiltreTab listeMaterielParMois={getListeMaterielParMois} getListeMaterielParAnnee={getListeMaterielParAnnee} getListeMaterielParDate={getListeMaterielParDate} />
      <TabListeMateriel listeMateriel={listeMaterielFiltrer(materielRechercher)} showLoader={showLoader} setRechargerPage={setRechargerPage} />
    </div> 
  )
}

export default index