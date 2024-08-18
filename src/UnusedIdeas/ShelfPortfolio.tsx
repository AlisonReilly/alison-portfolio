import React, { useEffect, useState } from 'react';
import { TextFade } from '../Components/TextEffects/TextFade';
import '../Styles/Projects.css';
import { BasicDiagram } from '../Components/Diagramming/BasicDiagram';
  

export const Projects: React.FC<React.HTMLProps<HTMLDivElement>> = () => { 
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


// the css for the trapezoid and front shelf:
// .trapezoid {
//     border-bottom: 25px solid #4d2305;
// 	border-left: 50px solid transparent;
// 	border-right: 50px solid transparent;
// 	height: 0;
// 	width: 900px;


// }

// .front {
//     height: 10px;
//     width: 1000px;
//     background-color: #331601;
// }