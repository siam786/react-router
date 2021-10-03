import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Friends from "./component/Friends/Friends";
import Notfound from "./component/Notfound/Notfound";
import Home from "./component/Home/Home";
import FriendDetails from "./component/FriendDetails/FriendDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/header">
            <Header />
          </Route>
          <Route exact path="/friend/:friendId">
            <FriendDetails />
          </Route>
          <Route exact path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
