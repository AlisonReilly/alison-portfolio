import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Projects.css';
import { AlphaDiagramMap, PortfolioItems } from '../constants/dataConstants';
import { ImageDisplay } from '../Components/ProjectComponents/ImageDisplay';
import { VideoDisplay } from '../Components/ProjectComponents/VideoDisplay';
import { ButtonImage } from '../Components/ToggleComponents/ButtonImage';
import buttonscale100 from '../assets/images/buttonscale100.png';

type ProjectProps = {
    isLoading: boolean;

}

export const Projects: React.FC<ProjectProps & React.HTMLProps<HTMLDivElement>> = ({isLoading}) => { 
    
    // todo this set of ideas is not really working to check on more than one at a time
    // would prob need to create refs in the map and do something to check if all of them are loaded and then
    // reflect all are loaded to change the state
    // for now will try to handle individual states only, this will create separate loaders but maybe not so bad
    const iFrameRef = useRef<HTMLIFrameElement>(null);
    const [isIFrameLoaded, setIFrameLoaded] = useState<boolean>(false);
    const iframeCurrent = iFrameRef.current;

    useEffect(() => {
        iframeCurrent?.addEventListener('load', () => setIFrameLoaded(true));
        return () => {
            iframeCurrent?.removeEventListener('load', () => setIFrameLoaded(true));
        };
      }, [iframeCurrent]);
      console.log('regular isLoading: ', isLoading)
      console.log('is iframe loaded?? ', isIFrameLoaded)
      console.log('iframe current: ', iframeCurrent)


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
                            ? <VideoDisplay iFrameRef={iFrameRef} video={p.href} />
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