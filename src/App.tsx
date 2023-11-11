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
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [pointerType, setPointerType] = useState<string>();


  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log('page loaded');
      setPageLoading(false)
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

  useEffect(() => {
    const checkPointerType = (event: any) => {
        if (event.pointerType === "mouse") { setPointerType('mouse')}
        if (event.pointerType === "touch") { setPointerType('touch')}
        if (event.pointerType === "pen") { setPointerType('pen')}
    }
    window.addEventListener('pointerdown', checkPointerType)
    return () => {
        window.removeEventListener('resize', checkPointerType);
    };
}, [])


  return (
    <div id='app-inner-div'>
      <HeaderSection/>
      <Routes>
        {/* todo error page isn't working in this setup */}
        <Route path="*" errorElement={<ErrorPage />} />
        <Route index path="/" element={<HeroSection />}/>
        <Route path="/about" element={<About pageLoading={pageLoading}/>}/>
        <Route path="/connect" element={<Connect />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/live-demos" element={<GameDemo pointerType={pointerType}/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/blog" element={<Blog posts={CurrentBlogPosts}/>}/>
        {CurrentBlogPosts && CurrentBlogPosts.map((p, i) => 
            <Route key={`${i}-${p.blogURL}`} path={`/${p.blogURL}`} element={<BlogRead title={p.title} blogContent={p.content}/>}/>
        )}
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
