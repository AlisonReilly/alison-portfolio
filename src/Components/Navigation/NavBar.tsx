import React, { useEffect, useState } from 'react'; 
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/GlassDropdown.css'
import { Link } from 'react-router-dom';
import { NavBarLI } from './NavBarLI';


type NavBarProps = {
    menuItemData?: NavItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, styleClass, ...htmlProps }) => { 
    const [displayedClass, setDisplayedClass] = useState({Experience: 'none', Projects: 'none'});

    const handleClick = (e: any) => {
        console.log('e: ', e.target.outerContext)
    }

    return ( 
        <nav id='PrimarySiteNav'>
            <ul className='horizontal-nav'>
            {MainNavItems.map((i, k) =>
            <>
                <NavBarLI mainNav={i} />
            </>
            )}
            </ul>
        </nav>

    ); 
} 
