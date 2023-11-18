import logo from './logo.svg';
import './App.css';
import AppLista from './protegido/AppLista';

function App() {
  return (
    <div style={{background:"cyan", width:"350px", padding:"10px"}}>
      <h1>App.js</h1>
      <AppLista/>
    </div>
  );
}

export default App;
