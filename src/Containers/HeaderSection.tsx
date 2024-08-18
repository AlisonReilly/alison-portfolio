import React from 'react';
import { ProfileHeader } from '../Components/ProfileHeader';
import { NavBar } from '../Components/Navigation/NavBar';
import '../Styles/Header.css';
import { MobileNav } from '../Components/Navigation/MobileNavUL';
  

interface HeaderSectionProps {
    isTouchScreen?: boolean;
    text?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps & React.HTMLProps<HTMLDivElement>> = ({isTouchScreen}) => {
    return (
        <div id='HeaderSection'>
            <ProfileHeader isTouchScreen={isTouchScreen}/>
            <MobileNav isTouchScreen={isTouchScreen}/>
            <NavBar isTouchScreen={isTouchScreen}/>
        </div>
    ); 
} 