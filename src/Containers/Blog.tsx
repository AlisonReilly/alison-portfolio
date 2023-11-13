import React, { useEffect, useState } from 'react';
import '../Styles/Blog.css';
import { BlogPreview } from '../Components/Blog/BlogPreview';
import { BlogPost } from '../constants/blogConstants';


  

type BlogProps = {
    text?: string;
    classNames?: string;
    isLoading?: boolean;
    posts: BlogPost[];
}

export const Blog: React.FC<BlogProps & React.HTMLProps<HTMLDivElement>> = ({
    classNames, isLoading, posts, text, ...htmlProps}) => { 
    const [orderedPosts, setOrderedPosts] = useState<BlogPost[]>();
    
    useEffect(() => {
        setOrderedPosts(posts.sort((a, b) => {
            let key1 = new Date(a.date)
            let key2 = new Date(b.date)

            if (key1 > key2) {
                return -1;
            } else if (key1 === key2) {
                return 0;
            } else {
                return 1;
            }
        }))
    }, [posts])

    return (
        <>{!isLoading ? 
            <div id='Blog'>
                <div className='main-blog-list'>
                    {orderedPosts && orderedPosts.map((p, i) => 
                        <BlogPreview key={`${i}-preview`} blogContent={p.content} title={p.title} blogURL={p.blogURL} />
                    )}

                </div>
            </div>
            :
            <></>
            }
        </>
   
    ); 
} 