import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/GlassDropdown.css'
import { NavBarLI } from './NavBarLI';


type NavBarProps = {
    isTouchScreen?: boolean;
    menuItemData?: NavItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    isTouchScreen, menuItemData, styleClass, ...htmlProps }) => { 
    let navLocation = useLocation();
    console.log('location here: ', navLocation)

    return ( 
        <nav id={`${isTouchScreen && navLocation.pathname.includes('live-demos') ? 'NavGameDemo' : 'PrimarySiteNav'}`}>
            <ul className={`horizontal-nav ${navLocation.pathname === '/blog' ? 'blog-style' : 'primary-style'}`}>
            {MainNavItems.map((i, k) =>
                <>
                    <NavBarLI key={`${k}-top-nav`} id={`${k}-top-nav`} liIndex={k} mainNav={i} />
                </>
            )}
            </ul>
        </nav>

    ); 
} 
