import React, { useState } from 'react';
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/MobileNav.css';
import { MobileNavItem } from './MoblieNavItem';

type MobileNavProps = {
    menuItemData?: NavItem[];
    text?: string;
}

export const MobileNav: React.FC<MobileNavProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, text, ...htmlProps}) => { 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <nav id='PrimaryMobileNav' className='mobile-nav' role="navigation" aria-label="Main menu">
            <button id='mobile-nav-button' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            <ul className={`flexcolumn glass mobile-ul ${!isOpen ? 'closed-menu' : ''}`}>
            {isOpen && MainNavItems.map((i, k) =>
                <MobileNavItem navHref={i.href} navName={i.name} navSubItems={i.subNav} isOpen={isOpen} setIsOpen={setIsOpen}/>
            )}
            </ul>
        </nav>
    ); 
} 