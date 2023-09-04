import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/images/logo.png';


const Sidebar = () => {

  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" className='logo' />
        <ul className="menu">
            <li>
                <NavLink to="/app/dashboard" className='menu-active'>
                    <i className='fas fa-chart-simple'></i>Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/app/clients">
                    <i className='fas fa-users'></i>Clients
                </NavLink>
            </li>
            <li>
                <NavLink to="/app/materiels">
                    <i className='fas fa-box-archive'></i>Matériels
                </NavLink>
            </li>
            <li>
                <NavLink to="/app/ventes">
                    <i className='fas fa-shopping-cart'></i>Ventes
                </NavLink>
            </li>
            <li>
                <NavLink to="/app/parametres">
                    <i className='fas fa-gear'></i>Paramètres
                </NavLink>
            </li>
            <li>
                <NavLink to="/" onClick={() => {sessionStorage.clear()}}>
                    <i className='fas fa-right-from-bracket'></i>Déconnecter
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar