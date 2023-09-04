import React from 'react';
import { NavLink } from 'react-router-dom';
import './Parametres.css';
import TitrePage from '../../components/TitrePage/TitrePage';
import InputPasswordForm from '../../components/InputForm/InputPasswordForm';
import BtnVert from '../../components/Bouton/BtnVert';
import BtnRouge from '../../components/Bouton/BtnRouge';

const Parametres = () => {
  return (

    <div className='parametres'>
       <TitrePage titre="Paramètres" />
       <ul className="sous-menu">
          <li>
            <NavLink to="/app/parametres">CHANGER MOT DE PASSE</NavLink>
          </li>
        </ul>
        <div className='nouveau-clients'>
          <div className="form">
            <InputPasswordForm label="Ancien mot de passe" name="lastPassword" />
            <InputPasswordForm label="Nouveau mot de passe" name="newPassword" />
            <InputPasswordForm label="Confirmer mot de passe" name="confirmPassword" />
            <div className="btn-group">
              <BtnRouge>Annuler</BtnRouge>
              <BtnVert>Enregistrer</BtnVert>
            </div>
          </div>
        </div>
    </div>


  )
}

export default Parametres 