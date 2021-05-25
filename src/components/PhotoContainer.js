import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
    return (
        <div className="photo-container">
            <Photo />
        </div>
    );
}

{/*const PhotoContainer = (props) => {
    let photos = props.data.map((photo) => {
        return <Photo />
    });
    return (
        <div>
            {photos}
        </div>
    );
} */}

export default PhotoContainer;