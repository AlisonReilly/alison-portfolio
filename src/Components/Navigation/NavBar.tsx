import React, { useState } from 'react'; 
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/MobileNav.css'
import { Link } from 'react-router-dom';


type NavBarProps = {
    menuItemData?: NavItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, styleClass, ...htmlProps}) => { 
    return ( 
        <nav className='desktop-nav' id='MainNav'>
            <ul className='main-menu horizontal-nav'>
            {MainNavItems.map((i, k) =>
            <>
                <li id='increment' className='submenu-ul-control main-li'>
                    <span id='small-tick'>{'| '.repeat(i.name.replace(/\s/g, '').length * 1.75 + 4)}</span>
                    <Link id='main-name' className='modern-link' to={i.href ? i.href  : ''}>{i.name}</Link>
                    {i.subNav && 
                    <ul className='glass sub-nav-ul'>{i.subNav.map((si, k) => 
                        <>
                            <li className='flexrow'>
                                <span className='bracket'>[</span><span className='bracket-text'>{si.name}</span>
                            </li>
                        </>
                    )}

                    </ul>}
                </li>
                </>
            )}
            </ul>
        </nav>

    ); 
} 
