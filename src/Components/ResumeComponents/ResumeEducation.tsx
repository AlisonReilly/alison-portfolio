import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../../Styles/Resume.css';
import { Education } from '../../constants/dataConstants';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

type EduProps = {
    text?: string;
}

export const ResumeEducation: React.FC<EduProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='Experience'>
            {Education.map((r, i) => 
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