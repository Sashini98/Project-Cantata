// import { useLocation } from "react-router-dom";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import AdminPage from "./Screens/AdminPage";
import LoginPage from "./Screens/Login";
// import { GuardProvider, GuardedRoute } from 'react-router-guards';
import './App.css';

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


        </Switch>
      </Router>
    </div>
  );
}

export default App;
