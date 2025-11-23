import React, { useState } from 'react';
import '../../Styles/Resume.css';
import { ResumeEntries, ResumeEntry } from '../../constants/dataConstants';


interface ExperienceProps {
    text?: string;
}

export const ResumeExperience: React.FC<ExperienceProps & React.HTMLProps<HTMLDivElement>> = () => {
    const [resumeDetails, setResumeDetails] = useState<ResumeEntry[] | []>(ResumeEntries)

    return (
        <div id='Experience'>
            {resumeDetails.map((r, i) =>
                <div key={`resume-jobs-${i}`} className='entry'>
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
                        <li key={`resume-jobs-details-${i}`}>{a}</li>
                    )}
                    </ul>
                    <ul className='skills whole-grid'>{r.skills && r.skills.map((s, i) =>
                        <li key={`resume-jobs-skills-${i}`} className='each-skill single-line'>{s}</li>
                    )}
                    </ul>
                </div>
            )}
        </div>
    );
} 