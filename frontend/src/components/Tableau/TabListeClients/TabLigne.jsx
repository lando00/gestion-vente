import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';
import Swal from 'sweetalert2';


const TabLigne = ({num, nom, prenom, tel, setRechargerPage}) => {



  const handleClickIconDelete = (num) => {
 
    Swal.fire({
        text: `Voulez-vous vraiment supprimer ${prenom} ?`,
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Oui',
        confirmButtonColor:  '#4CAF50',
        denyButtonText: 'Non',
        denyButtonColor: '#f44336', 
    }).then((result) => {
        if (result.isConfirmed) {
            supprimerClient(num);
        }
    })

    const supprimerClient = (id) => {

        axios.delete(`/client/${id}`)
        .then(rep => {
            alerte(rep.data.type, rep.data.message);
            setRechargerPage(rechargerPage => !rechargerPage);
        })
        .catch(err => {console.log(err)})

    }

  }

  return (
    <div className="entree">
        <div className="cellules">
            <span>{num}</span>
        </div>
        <div className="cellules">
            <span>{nom}</span>
        </div>
        <div className="cellules">
            <span>{prenom}</span>
        </div>
        <div className="cellules">
            <span>{tel}</span>
        </div>
        <div className="cellules">
            <span>
                <Link to={`/app/clients/info/${num}`}>          
                    <i className='fas fa-address-card' style={{color:'#4caf50'}} title='Info client'></i>
                </Link>
            </span>
            <span>
                <Link to={`/app/clients/facture/${num}`}>
                    <i className='fas fa-rectangle-list' style={{color:'#4caf50'}} title='Facture'></i>
                </Link>
            </span>
            <span>
                <Link to={`/app/clients/modifier/${num}`}>
                    <i className='fas fa-pen-to-square'style={{color:'#4caf50'}} title='Editer'></i>
                </Link>
            </span>
            <span onClick={() => handleClickIconDelete(num)}><i className='fas fa-trash-can' style={{color:'#fe3a3a'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}


export default TabLigne