import { useEffect, useState } from 'react';
import './Styles/App.css';
import { HeaderSection } from './Containers/HeaderSection';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Blog } from './Containers/Blog';
import { CurrentBlogPosts } from './constants/blogConstants';
import { BlogRead } from './Components/Blog/BlogRead';
import { HeroSection } from './Containers/HeroSection';
import { About } from './Containers/About';
import { Projects } from './Containers/Projects';
import { GameDemo } from './Containers/GameDemo';
import ErrorPage from './Components/ErrorPage';
import { Resume } from './Containers/Resume';
import { Connect } from './Containers/Connect';
import { BlogItem, getBlogGraphQL } from './services/getBlog';



function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pointerType, setPointerType] = useState<string>();
    const [blogPosts, setBlogPosts] = useState<BlogItem[] | []>([]);
    console.log('blog posts: ', blogPosts)
        
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

    const cacheImages = async (images: string[]) => {
        const promises = await images.map((src) => {
            return new Promise((resolve: any, reject: any) => {
                const img: HTMLImageElement = new Image();
                img.src = src;
                img.onload = resolve();
                img.onerror = reject();
            })
        })
        await Promise.all(promises)
        setIsLoading(false)
    }


    useEffect(() => {
        const onPageLoad = () => {
            setIsLoading(false)
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    // todo this isn't necessarily helping with background images
    useEffect(() => {
        const images = [
            '/BGDiagramSteamPunk.png',
            '/FansArtDecoBG.png',
            '/In-White-96.png',
            '/EmailIcon.png',
            '/TempDownloadIcon.png',
            '/github-mark-white.svg',
            '../src/assets/images/buttonscale100.png'
        ]
        cacheImages(images)
    })

    // todo - other means of checking for type of device in game seem to be more sufficient
    useEffect(() => {
        const checkPointerType = (event: any) => {
            if (event.pointerType === "mouse") { setPointerType('mouse') }
            if (event.pointerType === "touch") { setPointerType('touch') }
            if (event.pointerType === "pen") { setPointerType('pen') }
        }
        window.addEventListener('pointerdown', checkPointerType)
        return () => {
            window.removeEventListener('resize', checkPointerType);
        };
    }, [])


    return (
        <div id='app-inner-div'>
            <HeaderSection isTouchScreen={pointerType === 'touch'} />
            <Routes>
                {/* todo error page isn't working in this setup */}
                <Route path="*" errorElement={<ErrorPage />} />
                <Route index path="/" element={<HeroSection />} />
                <Route path="/about" element={<About isLoading={isLoading} />} />
                <Route path="/connect" element={<Connect isLoading={isLoading} />} />
                <Route path="/projects" element={<Projects isLoading={isLoading} />} />
                <Route path="/live-demos" element={<GameDemo pointerType={pointerType} />} />
                <Route path="/resume" element={<Resume isLoading={isLoading} />} />
                <Route path="/blog" element={<Blog />} />
                {blogPosts.length > 0 && blogPosts.map((p, i) =>
                    <Route key={`${i}-${p.blogURL}`} path={`/blog/${p.blogURL}`} element={<BlogRead title={p.title} content={p.content} originalDate={new Date(p.originalDate).toLocaleDateString("en-US")} />} />
                )}
            </Routes>
            {/* <Outlet /> */}
        </div>
    );
}

export default App;
