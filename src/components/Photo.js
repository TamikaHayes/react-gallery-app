import React from 'react';

const Photo = (props) => {
    return (       
        <li>
            {console.log(props.url)}
            <img src={props.url} alt=""/>
        </li>
    );
}


export default Photo;