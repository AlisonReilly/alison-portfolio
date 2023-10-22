import React from 'react';
import '../Styles/Blog.css';
import { BlogListItem } from '../Components/Blog/BlogListItem';

  

type BlogProps = {
    text?: string;
    classNames?: string;
}

export const Blog: React.FC<BlogProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, text, ...htmlProps}) => { 
   
    return (
        <div id='Blog'>
            <div className='main-blog-list'>
                <BlogListItem />
            </div>
        </div>
   
    ); 
} 