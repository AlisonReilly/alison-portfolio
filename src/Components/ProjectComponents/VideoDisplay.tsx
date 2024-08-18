import React, { RefObject, useEffect, useRef, useState } from 'react';
import '../../Styles/Projects.css';

interface VideoDisplayProps {
    video?: string;
}

export const VideoDisplay: React.FC<VideoDisplayProps & React.HTMLProps<HTMLDivElement>> = ({
    video }) => {

    return (
            <div>
                <iframe
                    id='video-iframe'
                    className='youtubeIframe'
                    width="400" 
                    height="200" 
                    src={video}
                    title="YouTube video player" 
                    allow="web-share" 
                    allowFullScreen
                />
            </div>
    ); 
} 