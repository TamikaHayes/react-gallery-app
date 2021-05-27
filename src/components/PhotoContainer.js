import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {
    render () {
    let photos;
    
    //if results are returned, render photos data; else, render the NotFound component
    if (this.props.data.length > 0) {
        photos = this.props.data.map(photo => 
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        );
    } else {
        photos = <NotFound />
    }

    {/* {console.log(photos)} */}
    return (
        <div className="photo-container">
            <h2>{this.props.title}</h2>
            <ul>
                {photos}
                {/* {console.log(this.props.data)} */}
            </ul>
        </div>
    );
} 
}

export default PhotoContainer;