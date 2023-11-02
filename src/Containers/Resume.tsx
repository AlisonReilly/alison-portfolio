import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../Styles/Resume.css';
import { ResumeExperience } from '../Components/ResumeComponents/ResumeExperience';
import { ResumeEducation } from '../Components/ResumeComponents/ResumeEducation';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

type ResumeProps = {
    text?: string;
}

export const Resume: React.FC<ResumeProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='Resume'>
            <div className='resume-content flexcolumn'>
                <h2 className='section-header'>Experience</h2>
                <ResumeExperience/>
                <h2 className='section-header'>Education</h2>
                <ResumeEducation/>
            </div>
        </div>
    ); 
} 