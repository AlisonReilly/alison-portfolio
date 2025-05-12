import React, { useEffect, useState } from 'react';
import '../../Styles/Resume.css';
import { Education, ResumeEntry } from '../../constants/dataConstants';
import { getEduGraphQL } from '../../services/getResumeEdu';
  

interface EduProps {
    text?: string;
}

export const ResumeEducation: React.FC<EduProps & React.HTMLProps<HTMLDivElement>> = () => { 
        const [resumeDetails, setResumeDetails] = useState<ResumeEntry[] | []>([])
    
        useEffect(() => {
            getEduGraphQL()
                .then((graphqlData) => {
                    if (graphqlData && graphqlData.length) {
                        setResumeDetails(graphqlData);
                    } else {
                        // setResumeDetails(Education)
                    }
                })
                .catch((err) => {
                    console.log('err ', err)
                    // setResumeDetails(Education)
                });
        }, []);
    return (
        <div id='Experience'>
            {resumeDetails.map((r, i) => 
                <div className='entry' key={`resume-edu-${i}`}>
                    <div className='org-details'>
                        <div className='single-line job-title left'>{r.title}</div>
                        <div className='org single-line company'>{r.organization}</div>
                    </div>
                    <div className='supplementary'>
                        <div className='single-line date left'>{r.date}</div>
                        <div className='single-line location'>{r.location}</div>
                    </div>
                    <div className='desc-summary-edu'>{r.description}</div>       
                    <ul className='bullets experience-details whole-grid'>{r.achieved && r.achieved.map((a, i) => 
                        <li key={`resume-details-edu-${i}`}>{a}</li>
                    )}
                    </ul>
                    
                    <ul className='skills whole-grid'>{r.skills && r.skills.map((s, i) => 
                        <li key={`resume-skills-edu-${i}`} className='each-skill single-line'>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    ); 
} 