import React from 'react';
import '../../Styles/Projects.css';

type VideoDisplayProps = {
    video?: string;
}

export const VideoDisplay: React.FC<VideoDisplayProps & React.HTMLProps<HTMLDivElement>> = ({
    video }) => { 
    return (
        <div>
            <iframe 
                className='youtubeIframe'
                width="400" 
                height="200" 
                src={video}
                title="YouTube video player" 
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                allowFullScreen 
            />
        </div>
    ); 
} 