import React from 'react';
import '../../Styles/Projects.css';

type ImageDisplayProps = {
    image?: any;
    altText?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps & React.HTMLProps<HTMLDivElement>> = ({
    altText, image, }) => { 
    return (
        <div id='ImageDisplay'>  
            <img src={image} alt={altText}/>
        </div>
    ); 
} 