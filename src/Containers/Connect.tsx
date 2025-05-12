import React from 'react';
import '../Styles/Connect.css';
import '../Styles/Resume.css';


interface ConnectProps {
    isLoading: boolean;
    text?: string;
}

export const Connect: React.FC<ConnectProps & React.HTMLProps<HTMLDivElement>> = ({ isLoading }) => { 
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
        <> {isLoading 
        ? 
        <></>
        :
        <div id='Connect'>
            <h1 className='connect-header'>Connect via Email, LinkedIn or GitHub.</h1>
            <div className='connect-links'>
                <a className='modern-link email' href='mailto:reillyamr@gmail.com' target="_blank" rel="noreferrer">
                    <img src="EmailIcon.png" alt='email icon'/>
                </a>
                <a className='modern-link linkedin' href='https://www.linkedin.com/in/alisonreilly/' target="_blank" rel="noreferrer">
                    <img src="In-White-96.png" alt='linkedin profile'/>
                </a>
                <a className='modern-link github' href='https://github.com/AlisonReilly' target="_blank" rel="noreferrer">
                    <img src="github-mark-white.svg" alt='github page'/>
                </a>
                <div className='download' role='button' onClick={onDownload}>
                    <img src="TempDownloadIcon.png" alt='resume download'/>
                </div>
            </div>
        </div>
        }
        </>

    ); 
} 
