import React from 'react';
import '../../Styles/Blog.css';
import { Link } from 'react-router-dom';
import { CurrentBlogPosts } from '../constants/blogConstants';

type BlogListItemProps = {
    altText?: string;
    image?: any;
    content?: string;
    title?: string;
    date?: Date | string;
    tags?: string[];

}

export const BlogListItem: React.FC<BlogListItemProps & React.HTMLProps<HTMLDivElement>> = ({
    image, content, title, date, tags, altText }) => {
        const testBlog = CurrentBlogPosts[0];
    return (
        <div id='BlogListItem' className='glassBlog'>
            <h3 className='blog-title'>{testBlog.title}</h3>
            <div className='blog-preview-content'>{testBlog.content}


            </div>
            <Link to='#'>...Read More</Link>

        </div>
    ); 
} 