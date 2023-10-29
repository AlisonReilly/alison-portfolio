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


function App() {
  return (
    <div id='app-inner-div'>
      <HeaderSection/>
      <Routes>
        {/* todo error page isn't working in this setup */}
        <Route path="*" errorElement={<ErrorPage />} />
        <Route index path="/" element={<HeroSection />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/live-demos" element={<GameDemo />}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/blog" element={<Blog posts={CurrentBlogPosts}/>}/>
        {CurrentBlogPosts && CurrentBlogPosts.map((p, i) => 
            <Route path={`/${p.blogURL}`} element={<BlogRead title={p.title} blogContent={p.content}/>}/>
        )}
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
