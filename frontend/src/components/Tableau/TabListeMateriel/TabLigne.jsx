import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';
import Swal from 'sweetalert2';

const TabLigne = ({num, design, stock, prixUnitaire, setRechargerPage}) => {

    const handleClickIconDelete = (num) => {

        Swal.fire({
            text: `Voulez-vous vraiment supprimer ${design} ?`,
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Oui',
            confirmButtonColor:  '#4CAF50',
            denyButtonText: 'Non',
            denyButtonColor: '#f44336', 
        }).then((result) => {
            if (result.isConfirmed) {
                supprimerMateriel(num);
            }
        })
    }

    const supprimerMateriel = (id) => {

        axios.delete(`/materiel/${id}`)
        .then(rep => {
            alerte(rep.data.type, rep.data.message);
            setRechargerPage(rechargerPage => !rechargerPage);
        })
        .catch(err => {console.log(err)})

    }

  return (
    <div className="entree">
        <div className="cellules">
            <span>{num}</span>
        </div>
        <div className="cellules">
            <span>{design}</span>
        </div>
        <div className="cellules">
            <span>{prixUnitaire} Ar</span>
        </div> 
        <div className="cellules">
            <span>{stock}</span>
        </div>
        <div className="cellules"> 
            <span>
                <Link to={`/app/materiels/modifier/${num}`}>
                    <i className='fas fa-pen-to-square'style={{color:'#4caf50'}} title='Editer'></i>
                </Link>
            </span>
            <span onClick={() => handleClickIconDelete(num)}><i className='fas fa-trash-can' style={{color:'#fe3a3a'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne