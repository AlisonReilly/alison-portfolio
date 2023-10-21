import React, { useEffect, useState } from 'react';
import { TextFade } from '../Components/TextEffects/TextFade';
import '../Styles/Projects.css';
import { BasicDiagram } from '../Components/Diagramming/BasicDiagram';
  

type ProjectListProps = {
    text?: string;


}

export const Projects: React.FC<ProjectListProps & React.HTMLProps<HTMLDivElement>> = ({
    text, ...htmlProps}) => { 
    const [welcomeTimingMet, setWelcomeTimingMet] = useState<boolean>(false);


    useEffect(() => {

    }, [])
    
    return (
        <div id='Projects'>
            <div className="display-row">
                <div className='project-row'>
                    <div className='youtube'>
                        <iframe 
                            className='youtubeIframe'
                            width="200" 
                            height="200" 
                            src="https://www.youtube.com/embed/G4u_KgDfBYI?si=DEHwJOfH4e8agIan" 
                            title="YouTube video player" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture; 
                            web-share" 
                            allowFullScreen />
                    </div>
                </div>
                <div className='shelf'>
                    <div className='trapezoid'></div>
                    <div className='front'></div>
                </div>

            </div>
        </div>
    ); 
} 