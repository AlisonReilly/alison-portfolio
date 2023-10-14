import React from 'react';
import './Styles/App.css';
import { ProfileHeader } from './Components/ProfileHeader';
import { NavBar } from './Components/NavBar/NavBar';
import { HeroSection } from './Containers/HeroSection';
import { BasicDiagram } from './Components/Diagramming/BasicDiagram';
import { HeaderSection } from './Containers/HeaderSection';
import { TextType } from './TextEffects/TextType';

function App() {
  console.log('screen size: ', window.innerWidth)
  return (
    <div>
      <HeaderSection/>
      <HeroSection/>
      
    </div>
  );
}

export default App;
