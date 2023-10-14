import React from 'react';
import { ProfileHeader } from '../Components/ProfileHeader';
import { NavBar } from '../Components/NavBar/NavBar';
import '../Styles/Header.css';
  

type HeaderSectionProps = {
    text?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps & React.HTMLProps<HTMLDivElement>> = () => { 
    return (
        <div>
            <ProfileHeader/>
            <NavBar id='MainNav'/>
        </div>
    ); 
} 