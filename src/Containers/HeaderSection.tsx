import React from 'react';
import { ProfileHeader } from '../Components/ProfileHeader';
import { NavBar } from '../Components/Navigation/NavBar';
import '../Styles/Header.css';
import { MobileNav } from '../Components/Navigation/MobileNav';
  

type HeaderSectionProps = {
    text?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div id='HeaderSection'>
            <ProfileHeader/>
            <MobileNav/>
            <NavBar />
        </div>
    ); 
} 