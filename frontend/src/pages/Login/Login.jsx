import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import InputForm from '../../components/InputForm/InputForm';
import InputPasswordForm from '../../components/InputForm/InputPasswordForm';
import axios from '../../helpers/axiosConfig';
import alerte from '../../helpers/alerte';

const Login = () => {
    const [utilisateur, setUtilisateur] = useState({
        nomUtilisateur: "",
        motDePasse: ""
    })

    const navigate = useNavigate();

    const [txtBtn, setTxtBtn] = useState('Connexion');

    const handleClickBtn = () => {
        setTxtBtn("Connexion...")
        axios.post('/authentification/login', utilisateur)
            .then(rep => {
                setTxtBtn("Connexion")
                if(rep.data.type === 'success'){
                    sessionStorage.setItem("nomUtilisateur", "admin");
                    navigate('/app/dashboard');
                }else{
                    alerte(rep.data.type, rep.data.message);
                }
            })
            .catch(err => console.log(err));
    }

  return (
    <div className='login'>
        <h1>Se connecter</h1>
        <InputForm label="Nom d'utilisateur" name="nomUtilisateur" value={utilisateur.nomUtilisateur} onChangeInput={setUtilisateur} />
        <InputPasswordForm label="Mot de passe" name="motDePasse" value={utilisateur.motDePasse} onChangeInput={setUtilisateur} />
        <button onClick={handleClickBtn}><span>{txtBtn}</span><i className="fas fa-arrow-right"></i></button>
    </div>
  )
}

export default Login