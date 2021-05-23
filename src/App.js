import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Trending } from "./components/Trending";
import { Popular } from "./components/Popular";
import { Upcoming } from "./components/Upcoming";
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/trendingmovies">
          <Trending/>
        </Route>

        <Route path="/popularmovies">
          <Popular />
        </Route>

        <Route path="/upcomingmovies">
          <Upcoming />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
