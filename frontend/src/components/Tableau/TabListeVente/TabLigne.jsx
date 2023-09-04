import React from 'react';
import alerte from '../../../helpers/alerte';
import Swal from 'sweetalert2';
import axios from '../../../helpers/axiosConfig';

const TabLigne = ({numVente, nomClient, materiel, montant, quantite, prixUnitaire, date, setRechargerPage}) => {

    const handleClickIconDelete = (num) => {

        Swal.fire({
            text: `Voulez-vous vraiment supprimer ${materiel} ?`,
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
    
            axios.delete(`/vente/${id}`)
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
            <span>{nomClient}</span>
        </div>
        <div className="cellules">
            <span>{materiel}</span>
        </div>
        <div className="cellules">
            <span>{prixUnitaire} Ar</span>
        </div>
        <div className="cellules">
            <span>{quantite}</span>
        </div>
        <div className="cellules">
            <span>{montant}</span>
        </div>
        <div className="cellules">
            <span>{date}</span>
        </div>
        <div className="cellules"> 
            <span onClick={() => handleClickIconDelete(numVente)}><i className='fas fa-trash-can' style={{color:'#fe3a3a', marginLeft:'25px'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne