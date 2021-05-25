import React from 'react';
import apiKey from '../config';
import axios from  'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';


{/*const App = ({match}) => (*/}
const App = () => (
  <BrowserRouter>
    <div className="container">
      <SearchForm />
      <Nav />

        <Switch>
          <Route exact path="/" component={PhotoContainer} />
          <Route path="/birds" render={ () => <PhotoContainer title='Birds' /> } />
          <Route path="/whales" render={ () => <PhotoContainer title='Whales' /> } />
          <Route path="/flowers" render={ () => <PhotoContainer title='Flowers' /> } />
        <Route component={NotFound} />
        </Switch>

        {/*<Route exact path="/" component={PhotoContainer} />
        <Route path={`${match.path}/birds`} render={ () => <PhotoContainer data={} /> } />
        <Route path={`${match.path}/whales`} render={ () => <PhotoContainer data={} /> } />
<Route path={`${match.path}/flowers`} render={ () => <PhotoContainer data={} /> } />*/}

    </div>
  </BrowserRouter>
);

export default App;



