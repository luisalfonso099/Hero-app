import "./App.css";
import SearchHero from "./components/SearchHero.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Details from "./components/Details.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context }  from "./context/ContextHeroes"
import { useContext } from "react";
import NavBar from "./components/NavBar.jsx";
function App() {
  const {user} = useContext(Context)
  return (
    <div className=" bg-light">
      <div className="container">
      { localStorage.getItem("token") || user ?
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={SearchHero} />
          <Route exact path="/detalles/:id?" component={Details}/>
        </Switch>
      </Router>:
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
      }
      </div>
    </div>
  );
}

export default App;
