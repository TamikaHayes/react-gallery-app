/**
 * Treehouse FSJS Techdegree
 * Project 7 - React Photo Gallery
 * Tamika Hayes
 * May 26, 2021
 * App.js
 */

import React, { Component } from 'react';
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


class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      birds: [],
      whales: [],
      flowers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
    this.getBirdPhotos();
    this.getWhalePhotos();
    this.getFlowerPhotos();
    
  }
 //Search bar function
 performSearch = (query = 'ships') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      this.setState({ photos: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  //Birds nav button function
  getBirdPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=songbirds&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      this.setState({ birds: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  //Whales nav button function
  getWhalePhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=whales&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      this.setState({ whales: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  //Flowers nav button function
  getFlowerPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flowers&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      this.setState({ flowers: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch.bind(this)} />
          <Nav />

          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Switch>
                <Route exact path="/" render={() => <PhotoContainer data={this.state.photos}/> } />
                <Route path="/birds" render={ () => <PhotoContainer title='Birds' data={this.state.birds} /> } />
                <Route path="/whales" render={ () => <PhotoContainer title='Whales' data={this.state.whales} /> } />
                <Route path="/flowers" render={ () => <PhotoContainer title='Flowers' data={this.state.flowers} /> } />
                <Route path="/search/:query" render={ () => <PhotoContainer title='Search Results' data={this.state.photos} /> } />
              </Switch>       
          }

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



