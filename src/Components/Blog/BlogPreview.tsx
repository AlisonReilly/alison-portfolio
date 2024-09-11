import React, { ReactNode } from 'react';
import '../../Styles/Blog.css';
import '../../Styles/App.css';

import { Link } from 'react-router-dom';


interface BlogPreviewProps {
    altText?: string;
    image?: any;
    blogContent?: React.ReactNode;
    blogURL: string;
    title: string;
    date?: string;
    tags?: string[];
}

export const BlogPreview: React.FC<BlogPreviewProps & React.HTMLProps<HTMLDivElement>> = (
    { blogURL, image, blogContent, title, date, tags, altText }) => {
    return (
        <div id='BlogPreview' className='blogPreviewPane'>
            <div className='blog-preview-title'>{title}</div>
            <div className='blog-preview-date'>{date}</div>
            <div className='blog-preview-content'>{blogContent}</div>
            <div className='read-more'><Link className='read-link' to={`/blog/${blogURL}`}>Read</Link></div>
        </div>
    ); 
} 