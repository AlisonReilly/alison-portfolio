import React, { useState } from 'react'; 
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/NavBar.css';
import '../../Styles/GlassDropdown.css'
import { Link } from 'react-router-dom';


type NavBarProps = {
    menuItemData?: NavItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, styleClass, ...htmlProps}) => { 
    return ( 
        <nav id='MainNav'>
            <ul className='horizontal-nav'>
            {MainNavItems.map((i, k) =>
            <>
                <li id='increment' className='main-li' tabIndex={i.subNav ? 0 : -1}>
                    <span id='small-tick'>{'| '.repeat(i.name.replace(/\s/g, '').length * 1.75 + 4)}</span>
                    {i.href 
                    ? <Link id='main-name-link' className='modern-link' to={i.href}>{i.name}</Link> 
                    : <button id='main-name-button' tabIndex={-1}>{i.name}</button>}

                    
                    {i.subNav && 
                    <ul className='glass sub-nav-ul'>{i.subNav.map((si, k) => 
                        <>
                            <li className='flexrow bracket-wrapper'>
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
