import React from 'react';
import '../../Styles/Blog.css';

type BlogReadProps = {
    image?: any;
    altText?: string;
}

export const BlogRead: React.FC<BlogReadProps & React.HTMLProps<HTMLDivElement>> = ({
    altText, image, }) => { 
    return (
        <div id='blog-read'></div>
    ); 
} 