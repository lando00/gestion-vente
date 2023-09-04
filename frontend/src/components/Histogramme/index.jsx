import React from 'react';
import { BarElement, CategoryScale, Chart, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const index = ({listeChiffreAffaire}) => {

    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
        Title
    );
    
    console.log(listeChiffreAffaire)
    
    const data = {
        labels: listeChiffreAffaire.map(client => client.prenom),
        datasets: [
            { 
                label: "Chiffre d'affaire",
                data: listeChiffreAffaire.map(client => client.montant),
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            title:{
                display: true,
                text: ""
            }
        }
    }

  return (
    <Bar data={data} options={options} />
  )
}

export default index