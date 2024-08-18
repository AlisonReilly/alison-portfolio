import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/GlassDropdown.css'
import { NavBarLI } from './NavBarLI';
import { MenuLI } from './MenuLI';


interface MenuULProps {
    isTouchScreen?: boolean;
    menuItemData?: NavItem[];
}

export const MenuUL: React.FC<MenuULProps & React.HTMLProps<HTMLDivElement>> = ({
    isTouchScreen, menuItemData, ...htmlProps }) => { 
    let navLocation = useLocation();

    return ( 
        <nav id='MainMenu' className='glassMainMenu'>
            <ul className='horizontal-menu'>
            {MainNavItems.map((i, k) =>
                <MenuLI key={`${k}-top-nav`} id={`${k}-top-nav`} liIndex={k} mainNav={i} />
            )}
            </ul>
        </nav>

    ); 
} 