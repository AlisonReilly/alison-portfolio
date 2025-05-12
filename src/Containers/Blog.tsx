import React, { useEffect, useState } from 'react';
import '../Styles/Blog.css';
import { BlogPreview } from '../Components/Blog/BlogPreview';
import { BlogPost } from '../constants/blogConstants';
import { BlogItem, getBlogGraphQL } from '../services/getBlog';


interface BlogProps {
    isLoading?: boolean;
}



export const Blog: React.FC<BlogProps & React.HTMLProps<HTMLDivElement>> = ({ isLoading }) => {
        const [blogPosts, setBlogPosts] = useState<BlogItem[] | []>([]);
    
        useEffect(() => {
            getBlogGraphQL()
                .then((graphqlData) => {
                    if (graphqlData && graphqlData.length) {
                        setBlogPosts(graphqlData);
                    } else {
                        // todo would have to copy the new supabase response to have a backup of this
                        // setBlogPosts(PortfolioItems)
                    }
                })
                .catch((err) => {
                    // setblogPosts(PortfolioItems)
                });
        }, []);

    return (
        <>{!isLoading && blogPosts.length > 0 ?
            <div id='Blog'>
                <div className='main-blog-list'>
                    {blogPosts.map((p, i) => 
                        <BlogPreview
                            key={`${i}-preview`}
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