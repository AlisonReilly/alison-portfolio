import React, { useEffect, useState } from 'react';
import { TextFade } from '../Components/TextFade';
import '../Styles/Hero.css';
  


type HeroProps = {
    text?: string;
    classNames?: string;
    removeMS?: number;
    waitMS?: number;

}

export const HeroSection: React.FC<HeroProps & React.HTMLProps<HTMLDivElement>> = ({classNames, removeMS, text, waitMS, ...htmlProps}) => { 
    const [welcomeTimingMet, setWelcomeTimingMet] = useState<boolean>(false);
    const [skillsTimingMet, setSkillsTimingMet] = useState<boolean>(false);
    const [titleTimingMet, setTitleTimingMet] = useState<boolean>(false);

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
    }, [])
    
    return (
        <div id='Hero' className='text-intro'>
        {/* display the welcome timing, once seconds met display the name */}
        {welcomeTimingMet 
            ? 
            <>
            <TextFade 
                classNames='fade-in-only main-text' 
                text='Alison Reilly'/>
  
            </>
            :
            <TextFade
                classNames='fade-in-out-text main-text'
                text='Welcome'/>

        }
        {/* display the skills interlude, switch to title after */}
        {skillsTimingMet ? titleTimingMet ?
            <TextFade
                classNames='fade-in-only support-text'
                text='Full Stack Software Engineer'/> :
            <TextFade
                classNames='fade-in-out-text support-text'
                text='React TypeScript Python'/> : null
        }
        </div>
    ); 
} 