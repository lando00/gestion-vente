import React,{useEffect, useState} from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import TabListeMaterielVendu from '../../../components/Tableau/TabListeMaterielVendu'
import axios from '../../../helpers/axiosConfig'
import { getMontantTotal } from '../../../utils/utils';

const index = () => {

  const [listeMaterielVendu, setListeMaterielVendu] = useState([]);
  const [materielRechercher, setMaterielRechercher] = useState("");

  useEffect(() => {
    axios.get('materiel/liste/materiel_vendu')
      .then((response) => {
        setListeMaterielVendu(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  const listeMaterielVenduFiltrer = (materielRechercher) => {

    let resultatRecherche = listeMaterielVendu.filter(materiel => materiel.numMateriel.toLowerCase().includes(materielRechercher.toLowerCase()) ||  materiel.design.toLowerCase().includes(materielRechercher.toLowerCase()));

    return materielRechercher ? resultatRecherche : listeMaterielVendu;
  }

  return (
    <div>
      <BarreRecherche placeholder="materiel" rechercher={setMaterielRechercher} />
      <TabListeMaterielVendu listeMaterielVendu={listeMaterielVenduFiltrer(materielRechercher)} />
      <div className="footer">
        <p className='somme-total'>MONTANT TOTAL : <span>{getMontantTotal(listeMaterielVenduFiltrer(materielRechercher))} Ar</span></p>
      </div>
    </div>
  )
}

export default index