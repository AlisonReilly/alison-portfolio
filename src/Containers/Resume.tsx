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
                <h3 className='section-header'>Experience</h3>
                <ResumeExperience/>
                <h3 className='section-header'>Education</h3>
                <ResumeEducation/>
            </div>
        </div>
    ); 
} 