import "./assets/App.css";
import Formulario from "./componentes/Formulario/";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./componentes/Api/Api";
import Teste from "./componentes/BuscarDrink/Teste";
import Headers from "./componentes/Header/Header.jsx";
import NossoTime from "./componentes/nossoTime/NossoTime";
import SobreNos from "./componentes/sobreNos/SobreNos";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="Contato" />
          </Route>
          <Route exact path="/drinks/DrinksPopulares">
            <Api />
          </Route>
          <Route path="/Nosso-Time">
            <NossoTime />
          </Route>
          <Route path="/sobre">
              <SobreNos/>
          </Route>
          <Route path="/teste">
            <Headers />
          </Route>
          <Route path="/drinks/buscarDrink">
            <Teste />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
