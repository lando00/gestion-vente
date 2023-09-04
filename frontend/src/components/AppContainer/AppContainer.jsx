import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';

const AppContainer = () => {
 
  return sessionStorage.length > 0  
    ?
      (
        <>
          
            <Sidebar />
            <div className="pages-container">
                <Outlet />
            </div>
        </>
      )

    :

    <Navigate to="/" />
}

export default AppContainer