import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../Styles/Resume.css';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

type ResumeProps = {
    text?: string;
}

export const Resume: React.FC<ResumeProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='Resume'>
            <div className='resume-content'>

            some content
            </div>

        </div>
    ); 
} 