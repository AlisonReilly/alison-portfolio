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
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    useEffect(() => {

    }, [])
    
    return (
        <nav id='MobileNav' className='mobile-nav' role="navigation" aria-label="Main menu">
            <button id='mobile-nav-button' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            <ul className={`flexcolumn glass mobile-ul ${!isOpen ? 'closed-menu' : ''}`}>
            {isOpen && MainNavItems.map((i, k) =>
            <>
                <li className='mobile-li' onClick={() => setSubMenuOpen(!isSubMenuOpen)}>
                    <a className='mobile-a'><span className='bracket'>[</span><span className='bracket-text'>{i.name}</span></a>
                    {i.subNav && i.subNav.map((sn, k) => 
                    <ul className={`flexcolumn ${isSubMenuOpen ? 'open' : 'closed'}`}>
                        <li className=' mobile-li sub'>
                            <span className='bracket'>- </span><span className='bracket-text'>{sn.name}</span>
                        </li>
                    </ul>
                ) }
                </li>
            </>
            )}
            </ul>
</nav>
    ); 
} 