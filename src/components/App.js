//import logo from './logo.svg';
import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';


const App = () => (
  <div className="container">
    <SearchForm />
    <Nav />
    <PhotoContainer />
  </div>
);

export default App;



