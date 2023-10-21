import React from 'react';
import '../Styles/Projects.css';
import { AlphaDiagramMap, PortfolioItems } from '../dataConstants';
import { ImageDisplay } from '../Components/ProjectComponents/ImageDisplay';
import { VideoDisplay } from '../Components/ProjectComponents/VideoDisplay';


export const Projects: React.FC<React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='Projects'>
                <div className='project-list'>
                    { PortfolioItems.map((p, i) => 
                    <div key={`${i}-project`} className='project-item'>
                        <div className='project-title'>{p.title}</div>
                        <span className='project-diagram-vertical'>|</span>
                        {p.demoType === 'video' 
                            ? <VideoDisplay video={p.href} />
                            : <ImageDisplay image={p.href} altText={p.title} /> 
                        }
                        <div className='project-description'><span>Fig. {AlphaDiagramMap[i]} - </span>{p.description}</div>
                    </div>
                    )}
                </div>
        </div>

    ); 
} 