import "./assets/App.css";
import Formulario from "./componentes/Formulario/";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Api from "./componentes/Api/Api";
import ConteudoDrinks from "./componentes/ConteudoDrinks/ConteudoDrinks";
import TestandoDrop from "./Aulas_/TestandoDrop";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="Contato" />
          </Route>
          <Route path="/drinks">
            <Api />
          </Route>
          <Route path="/teste">
            <TestandoDrop />
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
