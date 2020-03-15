import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Start from "./pages/Start"
import RecipeList from "./pages/RecipeList"
import Recipe from "./pages/Recipe"

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path="/categories/:category" component={RecipeList}/>
          <Route path="/categories/:category/:id" component={Recipe}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
