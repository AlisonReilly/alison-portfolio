import React from 'react';
import '../../Styles/Projects.css';
import { Link } from 'react-router-dom';

interface ButtonImageProps {
    image?: any;
    className?: string;
    link?: string;
    linkText?: string;
    linkTextColor?: string;
    externalLink?: boolean;
    internalBlog?: boolean;
}

export const ButtonImage: React.FC<ButtonImageProps & React.HTMLProps<HTMLDivElement>> = ({
    className, externalLink, internalBlog, link, linkText, image, linkTextColor }) => { 
    return (<div className='flexcolumn' style={{ rowGap: '10px' }}>
                <a 
                    aria-hidden='true'
                    className={`modern-link ${className}`} 
                    href={link} 
                    style={{ backgroundImage: `URL(${image})`, backgroundSize: 'contain'}} 
                    target={externalLink ? '_blank' : ''}
                    rel={externalLink ? 'noreferrer' : ''}
                    > </a>
                {internalBlog 
                ? 
                <a 
                    className={`modern-link center-text ${className}`} 
                    href={link} 
                    style={{ color: `${linkTextColor}` }}
                    target={externalLink ? '_blank' : ''}
                    rel={externalLink ? 'noreferrer' : ''}>
                        {linkText}
                </a>
                :
                <Link className={`modern-link center-text ${className}`} to={link || ''}>{linkText}</Link>
                }
            </div>
    ); 
}