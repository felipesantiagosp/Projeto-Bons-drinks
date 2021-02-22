import logo from './logo.svg';
import './App.css';
import Aula2 from './Aula2';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Header from './componentes/Header';

function App() {
  return (
    <div className = "div0">
      <Header />
      <Formulario />
      <Rodape />
    </div>
  );
}

export default App;

//há dois tipos de componentes react, os de classe e os funcionais (funcional usa função setinha e os de classe, o class)