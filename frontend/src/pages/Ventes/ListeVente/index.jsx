import React, { useEffect, useState } from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import FiltreTab from '../../../components/FiltreTab/FiltreTab';
import TabListeVente from '../../../components/Tableau/TabListeVente';
import './ListeVente.css';
import axios from '../../../helpers/axiosConfig';

const index = () => { 

  const [listeVente, setListeVente] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [rechargerPage, setRechargerPage] = useState(false);

  useEffect(() => { 
    getListeTousLesVentes();
    
  }, [rechargerPage]);


  const listeVenteFiltrer = (recherche) => {

    let resultatRecherche = listeVente.filter(vente => vente.nomClient.toLowerCase().includes(recherche.toLowerCase()) ||  vente.materiel.toLowerCase().includes(recherche.toLowerCase()));

    return recherche ? resultatRecherche : listeVente;
  }

  const getListeTousLesVentes = () => {
    axios.get('/vente/liste')
    .then((reponse) => {
      setListeVente(reponse.data);
      setShowLoader(false);
    })
  }

  const getListeMaterielParMois = (m) => {
    if(m != "0"){
      axios.get(`/vente/filtrer_par_mois/${m}`)
      .then(response => {
        setListeVente(response.data)
      })
    }else{
      getListeTousLesVentes();
    }
  }

  const getListeMaterielParAnnee = (m) => {
    if(m != "aaaa"){
      axios.get(`/vente/filtrer_par_annee/${m}`)
      .then(response => {
        setListeVente(response.data)
      })
    }else{
      getListeTousLesVentes();
    }
   
  }

  const getListeMaterielParDate = (date1, date2) => {
    axios.get(`/vente/filtrer_par_date/${date1}/${date2}`)
    .then(response => {
      setListeVente(response.data)
    })
   
  }


 



  return (
    <div className='liste-vente'>
        <BarreRecherche placeholder="client" rechercher={setRecherche} />
        <FiltreTab listeMaterielParMois={getListeMaterielParMois} getListeMaterielParAnnee={getListeMaterielParAnnee} getListeMaterielParDate={getListeMaterielParDate} />
        <TabListeVente listeVente={listeVenteFiltrer(recherche)} showLoader={showLoader} setRechargerPage={setRechargerPage}/>
    </div>
  )
}

export default index