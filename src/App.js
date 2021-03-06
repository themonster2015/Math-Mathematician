import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/">
            {' '}
            <Home />
            {' '}
          </Route>
          <Route path="/quote">
            {' '}
            <Quote />
            {' '}
          </Route>
          <Route path="/calculator">
            {' '}
            <CalculatorPage />
            {' '}
          </Route>

        </Switch>
      </div>
      <Footer />
    </>

  );
}
