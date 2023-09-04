import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import TitrePage from '../../components/TitrePage/TitrePage';
import CardDashboard from '../../components/CardDashboard';
import Histogramme from '../../components/Histogramme';
import axios from '../../helpers/axiosConfig';

const Dashboard = () => {

  const [totalClient, setTotalClient] = useState();
  const [totalMateriel, setTotalMateriel] = useState();
  const [totalVente, setTotalVente] = useState();
  const [totalCA, setTotalCA] = useState();
  const [listeChiffreAffaire, setListeChiffreAffaire] = useState();
  const [annee, setAnnee] = useState(new Date().getFullYear());

  useEffect(() => {
    axios.get("/dashboard/total_ca")
      .then(rep => {
        setTotalCA(rep.data);
      })

    axios.get("/dashboard/total_client")
      .then(rep => {
        setTotalClient(rep.data);
      })
    
    axios.get("/dashboard/total_materiel")
      .then(rep => {
        setTotalMateriel(rep.data);
      })
    
    axios.get("/dashboard/total_vente")
      .then(rep => {
        setTotalVente(rep.data);
      })
    
    axios.get("/client/chiffre_affaire")
      .then(response => {
        setListeChiffreAffaire(response.data); 
      })
      .catch(err => console.log(err))

  }, [])

  const getAnneeCA = () => {
    return [...new Set(listeChiffreAffaire.map(c => c.annee))];
  } 

  const listeChiffreAffaireFiltrer = (annee)=>{
    return listeChiffreAffaire.filter(ca => ca.annee == annee)
  }

  return (
    <div className='dashboard'>
      <TitrePage titre="Dashboard" />
      <div className="card-container">
        {totalCA && <CardDashboard titre="TOTAL CA" valeur={totalCA} color="#4CAF50" icon="fa-money-bills" />}
        {totalClient && <CardDashboard titre="TOTAL CLIENT" valeur={totalClient}  color="#2196f3" icon="fa-users" />}
        {totalMateriel && <CardDashboard titre="TOTAL MATERIEL" valeur={totalMateriel} color="#f6b12d" icon="fa-box-archive" />}
        {totalVente && <CardDashboard titre="TOTAL VENTE" valeur={totalVente} color="#f44336" icon="fas fa-cart-shopping" />}
      </div>
      {
        listeChiffreAffaire && (
          <>
            <p className='titre-histogramme'>CHIFFRE D'AFFAIRE PAR CLIENT :
            <select onChange={e => {setAnnee(e.target.value)}}>
              {
                getAnneeCA().map(annee => <option value={annee} >{annee}</option>)
              }   
            </select>
            </p>
            <div className="histogramme">
              <Histogramme listeChiffreAffaire={listeChiffreAffaireFiltrer(annee)} />
            </div>
          </>
        )
      }
     
    </div>
  )
}

export default Dashboard