import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import NavbarComponent from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/Footer';

import HomePage from './pages/home';
import ResearchPage from './pages/research';
import PrototypesPage from './pages/prototypes';
import SolutionsPage from './pages/solutions';
import TeamPage from './pages/team';

function App() {
  return (
    <div className="App">
      <Router basename="/mercury">
        <NavbarComponent />
        <Switch>
          <ScrollToTop>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/research">
              <ResearchPage />
            </Route>
            <Route path="/prototypes">
              <PrototypesPage />
            </Route>
            <Route path="/solutions">
              <SolutionsPage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
          </ScrollToTop>
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
