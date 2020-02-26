import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Categories from "./pages/Categories"
import Main from "./pages/Main"
import Recipe from "./pages/Recipe"

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Categories}/>
          <Route exact path="/categories/:category" component={Main}/>
          <Route path="/categories/:category/:id" component={Recipe}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
