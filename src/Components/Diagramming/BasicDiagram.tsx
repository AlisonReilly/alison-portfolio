import React from 'react';
import '../../Styles/Diagramming.css';

type BasicDiagramProps = {
    figureNumber?: string;
}

export const BasicDiagram: React.FC<BasicDiagramProps & React.HTMLProps<HTMLDivElement>> = ({
    figureNumber, ...htmlProps}) => { 
    
    return (
        <span className='diagram-text'>Fig. {figureNumber}</span>
    ); 
} 