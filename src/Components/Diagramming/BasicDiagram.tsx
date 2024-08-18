import React from 'react';
import '../../Styles/Diagramming.css';

interface BasicDiagramProps {
    figureNumber?: string;
}

export const BasicDiagram: React.FC<BasicDiagramProps & React.HTMLProps<HTMLDivElement>> = ({
    figureNumber }) => { 
    
    return (
        <span className='diagram-text'>Fig. {figureNumber}</span>
    ); 
} 