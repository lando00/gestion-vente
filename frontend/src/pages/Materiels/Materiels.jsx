import React, {useEffect} from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Materiels.css';
import TitrePage from '../../components/TitrePage/TitrePage';

const Materiels = () => {

  const navigate = useNavigate();
  useEffect(() => { 
    navigate("/app/materiels/liste");
  },[])
  
  return (
    <div className='materiels'>
       <TitrePage titre="Matériels" />
       <ul className="sous-menu">
          <li>
            <NavLink to="/app/materiels/liste">TOUS LES MATERIELS</NavLink>
          </li>
          <li>
            <NavLink to="/app/materiels/liste_materiel_vendu">MATERIEL VENDU</NavLink>
          </li>
          <li>
            <NavLink to="/app/materiels/nouveau">NOUVEAU MATERIEL</NavLink>
          </li>
          {/* <li>
            <NavLink to="/app/materiels/mouvement">MOUVEMENT MATERIEL</NavLink>
          </li>  */}
        </ul>
        <Outlet />
    </div>
  )
}

export default Materiels