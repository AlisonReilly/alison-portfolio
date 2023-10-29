import React from 'react';
import '../../Styles/Blog.css';
import { Link, Route, Routes } from 'react-router-dom';
import { CurrentBlogPosts } from '../../constants/blogConstants';
import { BlogRead } from './BlogRead';

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
        <div id='BlogPreview' className=''>
            <h3 className='blog-preview-title'>{title}</h3>
            <div className='blog-preview-date'>{date}</div>
            <div className='blog-preview-content'>{blogContent}</div>
            <Link to={`/${blogURL}`}>...Read More</Link>
        </div>
    ); 
} 