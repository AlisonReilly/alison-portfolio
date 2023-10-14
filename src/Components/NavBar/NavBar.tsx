import React, { useState } from 'react'; 
import { MainNavItems, MenuItem } from '../../dataConstants';
import '../../Styles/NavBar.css'

type NavBarProps = {
    menuItemData?: MenuItem[];
    styleClass?: string;
}

export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, styleClass, ...htmlProps}) => { 
    return ( 
        <nav className='' id={htmlProps.id}>
            <ul className='main-menu horizontal-nav'>
            {MainNavItems.map((i, k) =>
            <>
                <li id='increment'>
                    <span id='small-tick'>{'| '.repeat(i.name.replace(/\s/g, '').length * 1 + 2)}</span>
                    <a id='main-name' className='modern-link' href={i.href}>{i.name}</a>
                </li>
                </>
            )}
            </ul>
        </nav>

    ); 
} 
