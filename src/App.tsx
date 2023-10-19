import React from 'react';
import './Styles/App.css';
import { ProfileHeader } from './Components/ProfileHeader';
import { NavBar } from './Components/Navigation/NavBar';
import { HeroSection } from './Containers/HeroSection';
import { BasicDiagram } from './Components/Diagramming/BasicDiagram';
import { HeaderSection } from './Containers/HeaderSection';
import { TextType } from './Components/TextEffects/TextType';
import { Outlet } from 'react-router-dom';


function App() {

  console.log('screen size: ', window.innerWidth)
  return (
    <div id='app-inner-div'>
      <HeaderSection/>
      <Outlet />
      {/* <div className='relative'><HeroSection/></div> */}
      
      
    </div>
  );
}

export default App;
