import "./assets/App.css";
import Formulario from "./componentes/Formulario/";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inputs from "./componentes/Inputs/Inputs";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="Contato" />
          </Route>
          <Route path="/teste">
            <Inputs tipoInput="text" titulo="Escreva seu nome aqui"/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
