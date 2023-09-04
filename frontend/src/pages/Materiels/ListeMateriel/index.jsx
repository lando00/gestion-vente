import React, {useState, useEffect} from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import TabListeMateriel from '../../../components/Tableau/TabListeMateriel';
import axios from '../../../helpers/axiosConfig';

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


  return (
    <div>
      <BarreRecherche placeholder="materiel" rechercher={setMaterielRechercher} />
      <TabListeMateriel listeMateriel={listeMaterielFiltrer(materielRechercher)} showLoader={showLoader} setRechargerPage={setRechargerPage} />
    </div>
  )
}

export default index 