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
                <div>
                    <div>
                        <span>{r.title}</span>
                        <span>{r.organization}</span>
                        <span>{r.location}</span>
                        <span>{r.date}</span>
                    </div>
                    <div>{r.description}</div>       
                    <ul>{r.achieved && r.achieved.map((a, i) => 
                        <li>{a}</li>
                    )}
                    </ul>
                    
                    <ul>{r.skills && r.skills.map((s, i) => 
                        <li>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 