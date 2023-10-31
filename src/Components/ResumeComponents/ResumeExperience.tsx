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
                        <div>{r.title}</div>
                        <div className='org'>{r.organization}</div>
                        <div>{r.location}</div>
                        <div>{r.date}</div>
                    </div>
                    <div>{r.description}</div>       
                    <ul className='flexcolumn bullets details'>{r.achieved && r.achieved.map((a, i) => 
                        <li>{a}</li>
                    )}
                    </ul>
                    
                    <ul className='flexrow bullets skills'>{r.skills && r.skills.map((s, i) => 
                        <li>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 