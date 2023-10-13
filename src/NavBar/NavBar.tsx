import React, { useState } from 'react'; 
import { MainNavItems, MenuItem } from '../dataConstants';

type NavBarProps = {
    menuItemData?: MenuItem[];
    styleClass?: string;
}

// todo - trying to use id outside of componenent def does not really work to style anything
// so will need to pass in various classes
// and / or used styled components
// and / or get better at css/css modules
// for now the main navigation color is happening in class .horizontal-nav - but will need to change if this horizontal nav is used for other purposes
export const NavBar: React.FC<NavBarProps & React.HTMLProps<HTMLDivElement>> = ({menuItemData, styleClass, ...htmlProps}) => { 
    const [, ] = useState(true); 
    return ( 
        <nav className='' id={htmlProps.id}>
            <ul className='main-menu horizontal-nav'>
            {MainNavItems.map((i, k) =>
            <>
                
                <li id='increment' className='horizontal'><span id='small-tick'>{'| '.repeat(i.name.replace(/\s/g, '').length * 1 + 2)}</span><a id='main-name' className='modern-link' href={i.href}>{i.name}</a></li>
                </>
            )}
            </ul>
        </nav>

    ); 
} 
