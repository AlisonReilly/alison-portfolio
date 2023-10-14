import React from 'react';
import './Styles/App.css';
import { ProfileHeader } from './Components/ProfileHeader';
import { NavBar } from './Components/NavBar/NavBar';
import { HeroSection } from './Containers/HeroSection';

function App() {
  return (
    <div>
      <ProfileHeader/>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}

export default App;
