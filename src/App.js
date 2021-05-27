import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Homepage/Home";
import ContainerHome from "./Homepage/Container";
import ContainerDashboard from "./Dashboard/ContainerDashboard";
import React from "react";
import NotFound from "./components/commons/NotFound";
import RecapGroupOne from "./DashboardDati/GruppoUno";
import RecapGroupTwo from "./DashboardDati/GruppoDue";
// English Version
import ContainerHomeEng from "./English Version/Homepage/Container";
import AppEng from "./English Version/Homepage/HomeEng"
import ContainerDashboardEng from "./English Version/Dashboard/ContainerDashboardEng";
import RecapGroupOneEng from "./English Version/DashboardDati/GruppoUno";
import RecapGroupTwoEng from "./English Version/DashboardDati/GruppoDue";
import RecapGroupOneManagement from "./Management/GruppoUno"

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

                    {/* English Version */}
                  <Route exact path="/Home-eng">
                        <AppEng/>
                        <ContainerHomeEng/>
                  </Route>
                  <Route exact path="/dashboard-eng">
                        <ContainerDashboardEng/>
                  </Route>
                  <Route exact path="/Group1-eng">
                        <RecapGroupOneEng/>
                  </Route>
                  <Route exact path="/Group2-eng">
                         <RecapGroupTwoEng/>
                  </Route>
                  <Route exact path="/Manager-Gruppo1">
                         <RecapGroupOneManagement/>
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
