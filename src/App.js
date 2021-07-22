// import { useLocation } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import AdminPage from "./Screens/AdminPage/index";
import LoginPage from "./Screens/Login/index";
import Feed from "./Screens/Feed/index";
//import { GuardProvider, GuardedRoute } from 'react-router-guards';
import './App.css';
import Registration from "./Screens/Registration/index";
import Profile from "./Screens/UserProfile/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/admin/:subpath" exact >
            <AdminPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/registration" exact >
            <Registration />
          </Route>
          <Route path="/Feed" exact >
            <Feed />
          </Route>
         <Route path="/" exact >
            <Profile />
          </Route> 

        </Switch>
      </Router>
    </div>
  );
}

export default App;
