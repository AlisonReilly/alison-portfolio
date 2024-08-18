import React from 'react';
// import { ProfileHeader } from '../Components/ProfileHeader';
// import { NavBar } from '../Components/Navigation/NavBar';
import '../Styles/Resume.css';
import { ResumeExperience } from '../Components/ResumeComponents/ResumeExperience';
import { ResumeEducation } from '../Components/ResumeComponents/ResumeEducation';
// import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

interface ResumeProps {
    isLoading: boolean;
    text?: string;
}

export const Resume: React.FC<ResumeProps & React.HTMLProps<HTMLDivElement>> = ({ isLoading }) => { 

    const onDownload = () => {
        const pdfUrl = "aReillyDownload.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "aReillyDownload.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        {isLoading ? <></>
        :
        <div id='Resume'>
            <div className='resume-content flexcolumn'>
                <h1 className='resume-header-title'>Resume</h1>
                <div className='resume-links'>
                    <div className='download' role='button' onClick={onDownload}>
                        <img src="TempDownloadIcon.png" alt='download-icon'/>
                    </div>
                    <a 
                        className='modern-link linkedin' 
                        href='https://www.linkedin.com/in/alisonreilly/' 
                        target="_blank" 
                        rel='noreferrer'>
                            <img src="In-White-96.png" alt='linkedIn logo' />
                    </a>
                    <a 
                        className='modern-link github' 
                        href='https://github.com/Tsunamins' 
                        target="_blank" 
                        rel='noreferrer'>
                            <img src="github-mark-white.svg" alt='github logo' />
                    </a>
                </div>
                <h2 className='section-header'>Experience</h2>
                <ResumeExperience/>
                <h2 className='section-header'>Education</h2>
                <ResumeEducation/>
            </div>
        </div>
    }
    </>
    ); 
} 