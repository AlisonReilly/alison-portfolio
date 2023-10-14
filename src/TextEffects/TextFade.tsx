import React, { useEffect, useState } from 'react';
import '../Styles/TextFade.css';
  


type TextFadeProps = {
    /** string to display the text */
    text?: string;
    /** class name string to specify text purpose and fade style */
    classNames?: string;

}

export const TextFade: React.FC<TextFadeProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, text, ...htmlProps}) => { 
    return (
        <div id={htmlProps.id} className={classNames}>{text}</div>
    ); 
} 
