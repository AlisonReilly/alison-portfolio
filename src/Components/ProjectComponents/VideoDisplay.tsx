import React, { RefObject, useState } from 'react';
import '../../Styles/Projects.css';

type VideoDisplayProps = {
    iFrameRef?: RefObject<HTMLIFrameElement>;
    video?: string;
}

export const VideoDisplay: React.FC<VideoDisplayProps & React.HTMLProps<HTMLDivElement>> = ({
    iFrameRef, video }) => { 
        const [iFrameLoaded, setIFrameLoaded] = useState(false);

        const handleIFrameLoad = () => {
            setIFrameLoaded(true)
        }
    return (
        <> {iFrameLoaded ? 
            <div>
                <iframe 
                    ref={iFrameRef}
                    className='youtubeIframe'
                    width="400" 
                    height="200" 
                    src={video}
                    title="YouTube video player" 
                    allow="web-share" 
                    allowFullScreen
                    onLoad={handleIFrameLoad}
                />
            </div>
            :
            <></>
        }
        </>
    ); 
} 