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



function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pointerType, setPointerType] = useState<string>();

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
        // callback function to call when event triggers
        const onPageLoad = () => {
            setIsLoading(false)
            // do something else
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    // todo this isn't necessarily helping with background images
    useEffect(() => {
        const images = [
            '../public/BGDiagramSteamPunk.png',
            '../public/FansArtDecoBG.png',
            '../public/In-White-96.png',
            '../public/EmailIcon.png',
            '../public/TempDownloadIcon.png',
            '../public/github-mark-white.svg',
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
                <Route path="/blog" element={<Blog posts={CurrentBlogPosts} />} />
                {CurrentBlogPosts && CurrentBlogPosts.map((p, i) =>
                    <Route key={`${i}-${p.blogURL}`} path={`/blog/${p.blogURL}`} element={<BlogRead title={p.title} blogContent={p.content} date={p.date.toString()} />} />
                )}
            </Routes>
            {/* <Outlet /> */}
        </div>
    );
}

export default App;
