import React from 'react';
import '../../Styles/Blog.css';
import { Link } from 'react-router-dom';


type BlogPreviewProps = {
    altText?: string;
    image?: any;
    blogContent?: React.ReactNode;
    blogURL: string;
    title: string;
    date?: string;
    tags?: string[];
}

export const BlogPreview: React.FC<BlogPreviewProps & React.HTMLProps<HTMLDivElement>> = ({
    blogURL, image, blogContent, title, date, tags, altText }) => {

    return (
        <div id='BlogPreview' className='glassBlog'>
            <h2 className='blog-preview-title'>{title}</h2>
            <div className='blog-preview-date'>{date}</div>
            <div className='blog-preview-content'>{blogContent}</div>
            <Link className='read-more-link' to={`/${blogURL}`}>...Read More</Link>
        </div>
    ); 
} 