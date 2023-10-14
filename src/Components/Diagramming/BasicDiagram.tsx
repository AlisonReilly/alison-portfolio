import React, { useEffect, useState } from 'react';

import '../../Styles/Diagramming.css';
  


type BasicDiagramProps = {
    figureNumber?: string;
}

export const BasicDiagram: React.FC<BasicDiagramProps & React.HTMLProps<HTMLDivElement>> = ({
    figureNumber, ...htmlProps}) => { 
    const [welcomeTimingMet, setWelcomeTimingMet] = useState<boolean>(false);


    useEffect(() => {

    }, [])
    
    return (
        <span className='diagram-text'>Fig. {figureNumber}</span>
    ); 
} 