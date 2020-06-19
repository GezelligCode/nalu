import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from './components/header/header.component';

// NOTE: NEED TO SETUP ROUTING TO HATS PAGE. 6/15/2020


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />    
        <HomePage />
      </Switch>
    </div>
    );
}

export default App;
