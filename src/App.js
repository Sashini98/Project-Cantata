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
import ContentPost from './Screens/ContentPost';
import ReportedLyrics2 from './Screens/AdminPage/Components/ReportedLyrics2';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/admin/:subpath" exact >
            <AdminPage />
          </Route>

          {/* <Route path="/admin/reportedlyrics2/:lyricid" exact >
            <ReportedLyrics2 />
          </Route> */}

          <Route path="/login" exact>
            <LoginPage />
          </Route>

          <Route path="/registration" exact >
            <Registration />
          </Route>

          <Route path="/Feed/:subpath" exact >
            <Feed />
          </Route>

         <Route path="/" exact >
            <Profile />
          </Route> 

        <Route path="/ContentPost" exact >
            <ContentPost/>
          </Route>

        {/* <Route path="/ContentPost" exact >
            <ContentPost/>
          </Route> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
