import React from 'react';
import '../../Styles/Projects.css';

type ButtonImageProps = {
    image?: any;
    className?: string;
    link?: string;
    linkText?: string;
    linkTextColor?: string;
}

export const ButtonImage: React.FC<ButtonImageProps & React.HTMLProps<HTMLDivElement>> = ({
    className, link, linkText, image, linkTextColor }) => { 
    return (<div className='flexcolumn' style={{ rowGap: '10px' }}>
                <a className={`modern-link ${className}`} href={link} style={{ backgroundImage: `URL(${image})`, backgroundSize: 'contain'}} />
                <a className={`modern-link center-text ${className}`} href={link} style={{ color: `${linkTextColor}` }}>{linkText}</a>
            </div>
    ); 
}