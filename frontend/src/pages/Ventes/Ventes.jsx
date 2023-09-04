import React, {useEffect} from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import './Ventes.css';
import TitrePage from '../../components/TitrePage/TitrePage';

const Ventes = () => {

  const navigate = useNavigate();
  useEffect(() => { 
    navigate("/app/ventes/liste");
  },[])

  return (
    <div className='ventes'>
       <TitrePage titre="Ventes" />
       <ul className="sous-menu">
          <li>
            <NavLink to="/app/ventes/liste">LISTE DES VENTES</NavLink>
          </li>
          <li>
            <NavLink to="/app/ventes/nouveau">EFFECTUER UNE VENTE</NavLink>
          </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Ventes