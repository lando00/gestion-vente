import React, { useEffect, useState } from 'react';
import './FiltreTab.css'

const FiltreTabMouvementMat = ({listeMaterielParMois, getListeMaterielParAnnee, getListeMaterielParDate}) => {

  const tabMois = [
    {
      value: 1,
      mois: "Janvier"
    },

    {
      value: 2,
      mois: "Février"
    },

    {
      value: 3,
      mois: "Mars"
    }, 

    {
      value: 4,
      mois: "Avril"
    },

    {
      value: 5,
      mois: "Mai"
    },

    {
      value: 6,
      mois: "Juin"
    },

    {
      value: 7,
      mois: "Juillet"
    },

    {
      value: 8,
      mois: "Aout"
    },

    {
      value: 9,
      mois: "Septembre"
    },

    {
      value: 10,
      mois: "Octobre"
    },

    {
      value: 11,
      mois: "Novembre"
    },

    {
      value: 12,
      mois: "Décembre"
    },

  ]; 

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  useEffect(() => {
    getListeMaterielParDate(date1, date2)
  }, [date2])

  return (
    <div className='filtre-tab'>
        <label>Mois : </label>
        <select onChange={e => {setDate1(""); setDate2("");listeMaterielParMois(e.target.value)}}>
            <option value="0">mm</option>
            {
              tabMois.map(mois =><option value={mois.value}>{mois.mois}</option>)
            }
        </select>
        <span>ou</span>
        <label>Année : </label>
        <select onChange={e => {getListeMaterielParAnnee(e.target.value); setDate1(""); setDate2("");}}>
            <option value="aaaa">aaaa</option>
            <option value="2023" >2023</option>
            <option value="2022">2022</option>
        </select>
        <span>ou</span>
        <label>Dates : </label>
        <input type='date' value={date1} onChange={(e) => {setDate1(e.target.value)}} />
        <span>à</span>
        <input type='date' value={date2} onChange={(e) => {setDate2(e.target.value)}} />
    </div>
  )
}

export default FiltreTabMouvementMat