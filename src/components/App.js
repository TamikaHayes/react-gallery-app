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
import NotFound from './NotFound';


{/*const App = ({match}) => (*/}
class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      birds: [],
      whales: [],
      flowers: []
    };
  }

  componentDidMount() {
    this.performSearch();
    this.getBirdPhotos();
    this.getWhalePhotos();
    this.getFlowerPhotos();
    
  }

 performSearch = (query = 'songbirds') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      console.log(responseData);
      this.setState({ photos: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  getBirdPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=songbirds&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      console.log(responseData);
      this.setState({ birds: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  getWhalePhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=whales&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      console.log(responseData);
      this.setState({ whales: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  getFlowerPhotos = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flowers&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      console.log(responseData);
      this.setState({ flowers: responseData.data.photos.photo, loading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    {console.log(this.state.photos)}
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />

          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Switch>
                <Route exact path="/" render={() => <PhotoContainer data={this.state.photos}/> } />
                <Route path="/birds" render={ () => <PhotoContainer title='Birds' data={this.state.birds} /> } />
                <Route path="/whales" render={ () => <PhotoContainer title='Whales' data={this.state.whales} /> } />
                <Route path="/flowers" render={ () => <PhotoContainer title='Flowers' data={this.state.flowers} /> } />
              </Switch>       
          }

          
        </div>
      </BrowserRouter>
    );
  }
}


  {/*    
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
<Route path={`${match.path}/flowers`} render={ () => <PhotoContainer data={} /> } />

    </div>
  </BrowserRouter>
); */}

export default App;



