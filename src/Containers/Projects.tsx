import React, { useEffect, useState } from 'react';
import '../Styles/Projects.css';
import { AlphaDiagramMap, PortfolioItems } from '../constants/dataConstants';
import { ImageDisplay } from '../Components/ProjectComponents/ImageDisplay';
import { VideoDisplay } from '../Components/ProjectComponents/VideoDisplay';
import { ButtonImage } from '../Components/ToggleComponents/ButtonImage';
import buttonscale100 from '../assets/images/buttonscale100.png';
import { getProjectDetails } from '../services/firebaseGet';


interface ProjectProps {
    isLoading: boolean;

}

export const Projects: React.FC<ProjectProps & React.HTMLProps<HTMLDivElement>> = ({ isLoading }) => { 
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(()=>{
        getProjectDetails(projectDetails, setProjectDetails);
    }, [])

    return (
        <>
        {isLoading ? <></>
        :
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
                        <div className='flexrow links-display'>
                            <ButtonImage className='project-button' image={buttonscale100} link={typeof p.githubURL === 'string' ? p.githubURL : p.githubURL[0]} linkText='GitHub' linkTextColor='#EDDEA4'/>
                            {p.blogURL && <ButtonImage className='project-button' image={buttonscale100} link={p.blogURL} linkText='Blog' linkTextColor='#EDDEA4'/>}
                            {p.youTubeURL && <ButtonImage className='project-button' image={buttonscale100} link={p.youTubeURL} linkText='YouTube' linkTextColor='#EDDEA4' externalLink={true}/>}
                        </div>
                    </div>
                    )}
                </div>
        </div>
        }
        </>

    ); 
} 