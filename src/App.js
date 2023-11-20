import logo from './logo.svg';
import './App.css';
import AppLista from './protegido/sistemacrud/AppLista';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import { useAuth} from "./ruteo/AuthContext";

function App() {
  const { user } = useAuth();
  return (
    <div>
      <h1>App.js</h1>
      <i class="large material-icons">ac_unit</i>
      <Router>
        { user ? <BarraRutasProtected/> : <BarraRutasPublic/>}
        
      </Router>
    </div>
  );
}

export default App;
