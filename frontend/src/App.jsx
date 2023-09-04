import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer';

import Dashboard from './pages/Dashboard/Dashboard';

import Clients from './pages/Clients/clients';
import ListeClients from './pages/Clients/ListeClients';
import NouveauClients from './pages/Clients/NouveauClients';
import ModifierClients from './pages/Clients/ModifierClients';
import ChiffreAffaire from './pages/Clients/ChiffreAffaire';
import InfoClients from './pages/Clients/InfoClients';
import FactureClients from './pages/Clients/Facture';

import Materiels from './pages/Materiels/Materiels';
import ListeMateriel from './pages/Materiels/ListeMateriel';
import ListeMaterielVendu from './pages/Materiels/ListeMaterielVendu';
import NouveauMateriel from './pages/Materiels/NouveauMateriel';
import MouvementMateriel from './pages/Materiels/MouvementMateriel';
import ModifierMateriel from './pages/Materiels/ModifierMateriel';

import Ventes from './pages/Ventes/Ventes';
import ListeVente from './pages/Ventes/ListeVente';
import NouveauVente from './pages/Ventes/NouveauVente';

import Parametres from './pages/Parametres/Parametres';
import Login from './pages/Login/Login';


function App() {


  return (
   <div className='app'>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/app' element={<AppContainer />} >
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/clients" element={<Clients />}>
              <Route path="/app/clients/liste" element={<ListeClients />} />
              <Route path="/app/clients/nouveau" element={<NouveauClients />} />
              <Route path="/app/clients/modifier/:id" element={<ModifierClients />} />
              <Route path="/app/clients/chiffre_affaire" element={<ChiffreAffaire />} />
              <Route path="/app/clients/info/:id" element={<InfoClients />} />
              <Route path="/app/clients/facture/:id" element={<FactureClients />} />
            </Route>
            <Route path="/app/materiels" element={<Materiels />} >
              <Route path='/app/materiels/liste' element={<ListeMateriel />} />
              <Route path='/app/materiels/liste_materiel_vendu' element={<ListeMaterielVendu />} />
              <Route path='/app/materiels/nouveau' element={<NouveauMateriel />} />
              <Route path='/app/materiels/mouvement' element={<MouvementMateriel />} />
              <Route path='/app/materiels/modifier/:id' element={<ModifierMateriel />} />
            </Route>
            <Route path="/app/ventes" element={<Ventes />} >
              <Route path='/app/ventes/liste' element={<ListeVente />} />
              <Route path='/app/ventes/nouveau' element={<NouveauVente />} />
            </Route>
            <Route path="/app/parametres" element={<Parametres />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
