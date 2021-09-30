import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Friends from "./component/Friends/Friends";
import Notfound from "./component/Notfound/Notfound";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/header">
            <Header/>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
