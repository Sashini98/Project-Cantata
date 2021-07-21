// import { useLocation } from "react-router-dom";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import AdminPage from "./Screens/AdminPage";
import LoginPage from "./Screens/Login";
import Feed from "./Screens/Feed";
// import { GuardProvider, GuardedRoute } from 'react-router-guards';
import './App.css';
import Registration from "./Screens/Registration";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/admin/:subpath" exact >
            <AdminPage />
          </Route>
          <Route path="/login" exact >
            <LoginPage />
          </Route>
          <Route path="/registration" exact >
            <Registration />
          </Route>
          <Route path="/Feed/:subpath" exact >
            <Feed />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
