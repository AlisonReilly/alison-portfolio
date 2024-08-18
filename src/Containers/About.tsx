import React from 'react';
import '../Styles/About.css';


interface AboutProps {
    text?: string;
    classNames?: string;
    isLoading: boolean;
}

export const About: React.FC<AboutProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, isLoading, text, ...htmlProps}) => { 
    return (
        <> {!isLoading 
            ? 
            <div id='About' className='main-wrapper'>
                <div className='main-content glassAbout'>
                    <div className='p-div'>
                        After dabbling with a WordPress site, once upon a time, with a free stock template, I realized I wanted to learn 
                        more on how to take control of a webpage with html and css. Soon after, I realized I really liked the concept of 
                        coding and wondered if I might like to take that to the next level. I had been taking classes at my local community 
                        college while living in New York, uncertain of what I really wanted to do and decided to enroll in Intro to Computer 
                        science.
                    </div>
                    <div className='p-div'>
                        The class was the best I had ever taken. Nothing like a usual class, sitting and routinely memorizing things, making flash 
                        cards or cramming. In contrast, I had a million opportunities to problem solve something hands on, instantly see the result 
                        and use my overthinking nature to my advantage.
                    </div>
                    <div className='p-div'>
                        From there, I continued taking more classes, relocating to Miami, FL in between. After years of work / school exhaustion, I 
                        finally decided to try a bootcamp to accelerate the learning towards a specific career by enrolling at the Flatiron school's 
                        online program.
                    </div>
                    <div className='p-div'>
                        My background work experience is in the restaurant industry, meeting a great deal of amazing people. However it presented many 
                        stressful times, I am ever grateful for the time in the restaurant industry where I learned to work under pressure to perfection, 
                        thinking on my feet and massive amounts of teamwork.
                    </div>
                    <div className='p-div'>
                        A little on more personal interests. I love video games; I have a PS5, some of my favorite games are Skyrim, Fallout, Destiny and 
                        Assassin's creed series. I like wine, in particular French, Italian and Spanish wines. I like good food, not a food snob or a foodie 
                        so much, but definitely like to find good quality and unique features when dining out. I like warm weather and warm water, thus my 
                        permanent residence in Miami, FL. For exercise I like yoga, CrossFit and running. And occasionally rotate through other miscellaneous 
                        activities such as salsa dancing and inline skating.
                    </div>
                </div>
                </div>
            : null 
            }
        </>

   
    ); 
} 