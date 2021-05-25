import React from 'react';
import apiKey from '../config';
import {
  BrowserRouter,
  Route
  //Switch
} from 'react-router-dom';

//App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';



const App = () => (
  <BrowserRouter>
    <div className="container">
      <SearchForm />
      <Nav />
        <Route exact path="/" component={PhotoContainer} />
        <Route path="/birds" render={ () => <PhotoContainer title='Birds' /> } />
        <Route path="/whales" render={ () => <PhotoContainer title='Whales' /> } />
        <Route path="/flowers" render={ () => <PhotoContainer title='Flowers' /> } />

      {/*<Switch>
        <Route exact path="/" component={PhotoContainer} />
        <Route path="/birds" component={Birds} />
        <Route path="/whales" component={Whales} />
        <Route path="/flowers" component={Flowers} />
        <Route component={NotFound} />
      </Switch>*/}
    </div>
  </BrowserRouter>
);

export default App;



