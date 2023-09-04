import React, { useEffect, useRef } from 'react';
import './CardDashboard.css';
import { CountUp } from 'countup.js';

const index = ({titre, valeur, color, icon}) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const countUp = new CountUp(counterRef.current, valeur);
    countUp.start();
  }, [])

  return (
    <div className='card-dashboard' style={{borderLeft: `5px solid ${color}`}}>
        <p>{titre}</p>
        <span ref={counterRef}>{valeur}</span>
        <i style={{color: `${color}`}} className={`fas ${icon}`}></i>
    </div>
  )
}

export default index