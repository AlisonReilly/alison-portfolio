import React from 'react';
import '../../../Styles/Blog.css';
import '../../../Styles/BlogReadView.css';



interface InlineCodeEmphasisProps {
    text?: string;
}

export const InlineCodeEmphasis: React.FC<InlineCodeEmphasisProps & React.HTMLProps<HTMLDivElement>> = ({ text }) => { 
    return ( 
        <span className='inline-code-emphasis'>{text}</span>
    ); 
} 