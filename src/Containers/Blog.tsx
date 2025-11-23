import React, { useState } from 'react';
import '../Styles/Blog.css';
import { BlogPreview } from '../Components/Blog/BlogPreview';
import { JSON_BLOG } from '../constants/jsonBlog';


interface BlogProps {
    isLoading?: boolean;
}



export const Blog: React.FC<BlogProps & React.HTMLProps<HTMLDivElement>> = ({ isLoading }) => {
        const [blogPosts, setBlogPosts] = useState(JSON_BLOG);
    
    return (
        <>{!isLoading && blogPosts.length > 0 ?
            <div id='Blog'>
                <div className='main-blog-list'>
                    {blogPosts.map((p, i) => 
                        <BlogPreview
                            // key={`${i}-preview`}
                            content={p.content}
                            originalDate={new Date(p.originalDate).toLocaleDateString("en-US")}
                            title={p.title}
                            blogURL={p.blogURL} />
                    )}
                </div>
            </div>
            :
            <></>
        }
        </>

    );
} 