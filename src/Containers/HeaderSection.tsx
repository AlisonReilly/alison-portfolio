import React from 'react';
import { ProfileHeader } from '../Components/ProfileHeader';
import '../Styles/Header.css';
import { MobileNav } from '../Components/Navigation/MobileNavUL';
import { MenuUL } from '../Components/Navigation/MenuUL';
  

interface HeaderSectionProps {
    isTouchScreen?: boolean;
    text?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps & React.HTMLProps<HTMLDivElement>> = ({isTouchScreen}) => {
    return (
        <div id='HeaderSection'>
            <ProfileHeader isTouchScreen={isTouchScreen}/>
            <MobileNav isTouchScreen={isTouchScreen}/>
            {/* <NavBar isTouchScreen={isTouchScreen}/> */}
            <MenuUL isTouchScreen={isTouchScreen}/>
        </div>
    ); 
} 