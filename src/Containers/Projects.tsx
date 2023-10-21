import React, { useEffect, useState } from 'react';
import { TextFade } from '../Components/TextEffects/TextFade';
import '../Styles/Projects.css';
import { BasicDiagram } from '../Components/Diagramming/BasicDiagram';
import { PortfolioItems } from '../dataConstants';
import { ImageDisplay } from '../Components/ProjectComponents/ImageDisplay';
  

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
                    { PortfolioItems.map((p, i) => 
                        p.demoType === 'video' 
                        ?
                        <div className='youtube'>
                            <iframe 
                                className='youtubeIframe'
                                width="200" 
                                height="200" 
                                // src="https://www.youtube.com/embed/IZuhB9wp3Wo"
                                src={p.href}
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
                        :
                        <div className='project-image'>
                            <ImageDisplay/>
                        </div>
                    )}

                </div>
                <div className='shelf'>
                    <div className='trapezoid'></div>
                    <div className='front'></div>
                </div>

            </div>
        </div>

    ); 
} 