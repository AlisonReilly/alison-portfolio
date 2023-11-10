import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../../Styles/Resume.css';
import { Education, ResumeEntries } from '../../constants/dataConstants';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

type ExperienceProps = {
    text?: string;
}

export const ResumeExperience: React.FC<ExperienceProps & React.HTMLProps<HTMLDivElement>> = () => { 
    // const combined = ResumeEntries.push(Education)
    return (
        <div id='Experience'>
            {ResumeEntries.map((r, i) => 
                <div className='entry'>
                    <div className='org-details'>
                        <div className='single-line job-title left'>{r.title}</div>
                        <div className='org single-line company'>{r.organization}</div>
                    </div>
                    <div className='supplementary'>
                        <div className='single-line date left'>{r.date}</div>
                        <div className='single-line location'>{r.location}</div>
                    </div>
                    <div className='desc-summary'>{r.description}</div>       
                    <ul className='bullets experience-details whole-grid'>{r.achieved && r.achieved.map((a, i) => 
                        <li>{a}</li>
                    )}
                    </ul>
                    
                    <ul className='skills whole-grid'>{r.skills && r.skills.map((s, i) => 
                        <li className='each-skill single-line'>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 