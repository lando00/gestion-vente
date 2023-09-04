import React, { useEffect, useState, useRef } from 'react';
import './ChiffreAffaire.css';
import TabChiffreAffaire from '../../../components/Tableau/TabChiffreAffaire';
import BtnVert from '../../../components/Bouton/BtnVert';
import axios from '../../../helpers/axiosConfig';
import { useReactToPrint } from 'react-to-print'

const index = () => {

  const [listeChiffreAffaire, setListeChiffreAffaire] = useState([]);
  const [annee, setAnnee] = useState(new Date().getFullYear());
  const [showBtn , setShowBtn] = useState(true);

  const pdf = useRef(null);
    const handlePrint = useReactToPrint({
        content : () => {
          return pdf.current
        },
        documentTitle : "CHIFFRE D'AFFAIRE CLIENT",
        onAfterPrint : () => {

        }
  });

  useEffect(() => {
    axios.get("/client/chiffre_affaire")
      .then(response => {
        setListeChiffreAffaire(response.data);
      })
      .catch(err => console.log(err))
  }, []);


  const getAnneeCA = () => {
    return [...new Set(listeChiffreAffaire.map(c => c.annee))];
  } 


  const chiffreAffaireTotal = (annee) => {
    return listeChiffreAffaireFiltrer(annee).reduce((acc, obj) => acc + obj.montant, 0)
  }

  const listeChiffreAffaireFiltrer = (annee)=>{
    return listeChiffreAffaire.filter(ca => ca.annee == annee)
  }

  return (
    <>
      <div className='chiffre-affaire' ref={pdf}>
        <div className="annee">
          <span>ANNEE : </span>
          <select onChange={e => {setAnnee(e.target.value)}}>
            {
              getAnneeCA()?.map(annee => <option key={annee} value={annee}>{annee}</option>)
            }
          </select>
        </div>
        <TabChiffreAffaire chiffreAffaire={listeChiffreAffaireFiltrer(annee)} />
        <div className="footer">
          <p className='somme-total'>CHIFFRE D'AFFAIRE TOTAL : <span>{chiffreAffaireTotal(annee)} Ar</span></p>
          <BtnVert enregistrer={handlePrint}>Exporter en pdf</BtnVert>
        </div>
      </div>

    </>
  )
}

export default index