import React, { useEffect, useState } from 'react';
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/MobileNav.css';

  

type MobileNavProps = {
    menuItemData?: NavItem[];
    text?: string;
}

export const MobileNav: React.FC<MobileNavProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, text, ...htmlProps}) => { 
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {

    }, [])
    
    return (
        <nav id='MobileNav' className='mobile-nav' role="navigation" aria-label="Main menu">
            <button id='mobile-nav-button' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            <ul className={`flexcolumn glass ${!isOpen ? 'closed-menu' : ''}`}>
            {isOpen && MainNavItems.map((i, k) =>
            <>
                <li>
                    {i.name}
                </li>
                </>
            )}
            </ul>
</nav>
    ); 
} 