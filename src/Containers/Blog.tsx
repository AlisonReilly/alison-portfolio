import React, { useEffect, useState } from 'react';
import '../Styles/Blog.css';
import { BlogListItem } from '../UnusedIdeas/BlogListItem';
import { BlogPreview } from '../Components/Blog/BlogPreview';
import { BlogPost, CurrentBlogPosts } from '../constants/blogConstants';
import { Route, Routes } from 'react-router-dom';
import { BlogRead } from '../Components/Blog/BlogRead';

  

type BlogProps = {
    text?: string;
    classNames?: string;
    posts: BlogPost[];
}

export const Blog: React.FC<BlogProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, posts, text, ...htmlProps}) => { 
    const [orderedPosts, setOrderedPosts] = useState<BlogPost[]>();
    
    useEffect(() => {
        setOrderedPosts(posts.sort((a, b) => {
            let key1 = new Date(a.date)
            let key2 = new Date(b.date)

            if (key1 > key2) {
                return -1;
            } else if (key1 == key2) {
                return 0;
            } else {
                return 1;
            }
        }))
    }, [])

    return (
        <div id='Blog'>
            <div className='main-blog-list'>
                {orderedPosts && orderedPosts.map((p, i) => 
                    <BlogPreview key={`${i}-preview`} blogContent={p.content} title={p.title} blogURL={p.blogURL} />
                )}

            </div>
        </div>
   
    ); 
} 