import React from 'react';
import '../../Styles/Blog.css';

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
        console.log('props of any kind: ', props)
        console.log('title: ', title)
    return (
        <div id={blogURL} className='blog-read-container'>
            <h3 className='blog-read-title'>{title}</h3>
            <div className='blog-read-date'>{date}</div>
            <div className='blog-read-content'>{blogContent}</div>
    </div>
    ); 
} 