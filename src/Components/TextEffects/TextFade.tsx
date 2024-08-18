import React from 'react';
import '../../Styles/TextFade.css';
  

interface TextFadeProps {
    text?: string;
    classNames?: string;
}

export const TextFade: React.FC<TextFadeProps & React.HTMLProps<HTMLDivElement>> = (
    { classNames, text, ...props }) => { 
    return (
        <div id={props.id} className={classNames}>{text}</div>
    ); 
} 
