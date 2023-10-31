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
                        <div className='org single-line'>{r.organization}</div>
                        <div className='single-line'>{r.location}</div>
                        <div className='single-line'>{r.date}</div>
                    </div>
                    <div>{r.description}</div>       
                    <ul className='flexcolumn bullets details'>{r.achieved && r.achieved.map((a, i) => 
                        <li>{a}</li>
                    )}
                    </ul>
                    
                    <ul className='flexrow skills'>{r.skills && r.skills.map((s, i) => 
                        <li>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 