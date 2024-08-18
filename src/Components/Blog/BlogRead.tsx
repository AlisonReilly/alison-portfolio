import React from 'react';
import '../../Styles/Blog.css';
import '../../Styles/BlogReadView.css';


interface BlogReadProps {
    altText?: string;
    image?: any;
    blogContent?: React.ReactNode;
    blogURL?: string;
    title: string;
    date?: string;
    tags?: string[];
}

export const BlogRead: React.FC<BlogReadProps & React.HTMLProps<HTMLDivElement>> = ({
    blogURL, image, blogContent, title, date, tags, altText, ...props }) => { 
    return (
        <div id={blogURL} className='blog-read-container'>
            <div className='blog-read-title'>{title}</div>
            <div className='blog-read-date'>{date}</div>
            <div className='blog-read-content'>{blogContent}</div>
        </div>
    ); 
} 