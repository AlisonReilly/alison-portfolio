import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../../Styles/Resume.css';
import { ResumeEntries } from '../../constants/dataConstants';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

type ExperienceProps = {
    text?: string;
}

export const ResumeExperience: React.FC<ExperienceProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='Experience'>
            {ResumeEntries.map((r, i) => 
                <div className='flexcolumn entry'>
                    <div className='flexrow org-details'>
                        <div className='single-line'>{r.title}</div>
                        <div className='org single-line'>{r.organization}</div>
                        <div className='single-line no-mobile'>{r.location}</div>
                        <div className='single-line no-mobile'>{r.date}</div>
                    </div>
                    <div>{r.description}</div>       
                    <ul className='flexcolumn bullets experience-details'>{r.achieved && r.achieved.map((a, i) => 
                        <li>{a}</li>
                    )}
                    </ul>
                    
                    <ul className='flexrow skills no-mobile'>{r.skills && r.skills.map((s, i) => 
                        <li className='each-skill single-line'>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 