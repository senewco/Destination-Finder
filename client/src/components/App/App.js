import React from 'react';
import {Switch, Route} from "react-router-dom";
import Countries from 'components/Countries/Countries';
import Landmarks from 'components/Landmarks/Landmarks';
import Home from 'components/Home/Home';
import NavBar from 'components/NavBar/NavBar';
import Search from 'components/Search/Search';

const App = () => {
  return (
    <div>
      <title>Destination</title>

      <NavBar />
      <Switch>  
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/all-countries" component={Countries}></Route>
        <Route exact path="/all-landmarks" component={Landmarks}></Route>
        <Route exact path="/search/:term" component={Search}></Route>
      </Switch>
    </div>
  )
};

export default App;