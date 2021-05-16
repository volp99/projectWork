import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Homepage/Home";
import ContainerHome from "./Homepage/Container";
import ContainerDashboard from "./Dashboard/ContainerDashboard";
import React from "react";
import NotFound from "./components/commons/NotFound";
import RecapGroupOne from "./DashboardDati/GruppoUno";
import RecapGroupTwo from "./DashboardDati/GruppoDue";


function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Navbar/>
                      <ContainerHome/>
                  </Route>
                  <Route exact path="/dashboard">
                      <ContainerDashboard/>
                  </Route>
                  <Route exact path="/Gruppo1">
                      <RecapGroupOne/>
                  </Route>
                  <Route exact path="/Gruppo2">
                      <RecapGroupTwo/>
                  </Route>
                  <Route path="*">
                      <NotFound/>
                  </Route>
              </Switch>
          </Router>
      </>
  );
}
export default App;
