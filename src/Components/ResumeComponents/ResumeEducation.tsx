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
        <div id='Education'>
            {Education.map((r, i) => 
                <div className='flexcolumn entry'>
                    <div className='flexrow org-details-stretch'>
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