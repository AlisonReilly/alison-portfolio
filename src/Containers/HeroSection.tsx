import React, { useEffect, useState } from 'react';
import { TextFade } from '../Components/TextEffects/TextFade';
import '../Styles/Hero.css';
import { BasicDiagram } from '../Components/Diagramming/BasicDiagram';
import { Link } from 'react-router-dom';
  

interface HeroProps {
    text?: string;
    classNames?: string;
    removeMS?: number;
    waitMS?: number;

}

export const HeroSection: React.FC<HeroProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, removeMS, text, waitMS, ...htmlProps}) => { 
    const [welcomeTimingMet, setWelcomeTimingMet] = useState<boolean>(false);
    const [skillsTimingMet, setSkillsTimingMet] = useState<boolean>(false);
    const [titleTimingMet, setTitleTimingMet] = useState<boolean>(false);
    const [actionTimingMet, setActionTimingMet] = useState<boolean>(false);
 
    useEffect(() => {
        setTimeout(() => {
            setWelcomeTimingMet(true)
        }, 3000)
        setTimeout(() => {
            setSkillsTimingMet(true)
        }, 6000)
        setTimeout(() => {
            setTitleTimingMet(true)
        }, 9000)
        setTimeout(() => {
            setActionTimingMet(true)
        }, 12000)
    }, [])
    
    return (
        <div id='Hero'>
            {/* display the welcome timing, once seconds met display the name */}
            {welcomeTimingMet 
                ? 
                <div>
                    <BasicDiagram figureNumber='2'/>
                    <TextFade 
                        classNames='fade-in-only main-text diagram-outline' 
                        text='Alison Reilly'/>
                </div>
                :
                <TextFade
                    classNames='fade-in-out-text main-text'
                    text='Welcome'/>

            }
            {/* display the skills interlude, switch to title after */}
            {skillsTimingMet ? titleTimingMet ?
                <TextFade
                    classNames='fade-in-only support-text support-text-adjust-title'
                    text='Software Engineer'/> :
                <TextFade
                    classNames='fade-in-out-text support-text support-text-adjust'
                    text='React TypeScript Python'/> : null
            }
            {actionTimingMet ? <div className='action-buttons'>
                <Link className='modern-link action-button partial-border-pseudo' to={'/resume'}>View Experience</Link>
                <Link className='modern-link action-button partial-border-pseudo' to={'/projects'}>View Foundations</Link>
            </div> : null }
        </div>
    ); 
} 