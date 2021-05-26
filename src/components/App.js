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
      photos: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

 performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(responseData => {
      console.log(responseData);
      this.setState({ photos: responseData.data.photos.photo });
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

          <Route exact path="/" render={() => <PhotoContainer data={this.state.photos}/> } />
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



