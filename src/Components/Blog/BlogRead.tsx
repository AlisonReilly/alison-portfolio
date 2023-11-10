import React from 'react';
import '../../Styles/Blog.css';
import '../../Styles/BlogReadView.css';


type BlogReadProps = {
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
            <h1 className='blog-read-title'>{title}</h1>
            <div className='blog-read-date'>{date}</div>
            <div className='blog-read-content'>{blogContent}</div>
        </div>
    ); 
} 