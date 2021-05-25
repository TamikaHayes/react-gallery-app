import React from 'react';
import Photo from './Photo';

{/*const PhotoContainer = (props) => {
    return (
        <div className="photo-container">
            <Photo />
        </div>
    );
}*/}

const PhotoContainer = (props) => {
    const {data} = props;
    let photos;
    
    if (data.length > 0) {
        photos = data.map(photo => {
        
            <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        });
    } else {
        console.log('Not Working');
    }
       
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/*{photos}*/}
                {console.log(photos)}
                {console.log(props)}
            </ul>
        </div>
    );
} 

export default PhotoContainer;