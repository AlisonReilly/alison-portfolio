import React, { ReactNode } from 'react';
import '../../Styles/Blog.css';
import '../../Styles/App.css';
import { Link } from 'react-router-dom';


interface BlogPreviewProps {
    content: any;
    blogURL: string;
    title: string;
    originalDate?: any;
}

export const BlogPreview: React.FC<BlogPreviewProps & React.HTMLProps<HTMLDivElement>> = (
    { blogURL, content, title, originalDate }) => {

    const generatePreview = () => content.map((c, i) => {
        return (
            <p>{c.text}</p>
        )
    })
    return (
        <div id='BlogPreview' className='blogPreviewPane'>
            <div className='blog-preview-title'>{title}</div>
            <div className='blog-preview-date'>{originalDate}</div>
            <div className='blog-preview-content'>{generatePreview()}</div>
            <div className='read-more'><Link className='read-link' to={`/blog/${blogURL}`}>Read</Link></div>
        </div>
    ); 
} 