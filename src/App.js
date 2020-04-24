import React from 'react';
import Header from './elements/Header/Header'; 
 import Home from './Home/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './elements/NotFound/NotFound'; 
import Movie from './Movie/Movie';
import logo from './logo.svg';
import './App.css';
import { homedir } from 'os';

const App = () => {
  return(

    <BrowserRouter basename='/movie/'>
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path ="/" component={Home} exact/>
        <Route path ="/:movieId" component={Movie} exact/>
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
