import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/GlassDropdown.css'
import { NavBarLI } from './NavBarLI';


type NavBarProps = {
    menuItemData?: NavItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, styleClass, ...htmlProps }) => { 
    let location = useLocation();

    return ( 
        <nav id='PrimarySiteNav'>
            <ul className={`horizontal-nav ${location.pathname === '/blog' ? 'blog-style' : 'primary-style'}`}>
            {MainNavItems.map((i, k) =>
                <>
                    <NavBarLI key={`${k}-top-nav`} mainNav={i} />
                </>
            )}
            </ul>
        </nav>

    ); 
} 
