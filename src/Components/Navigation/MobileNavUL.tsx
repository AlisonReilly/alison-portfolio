import React, { createRef, useEffect, useState } from 'react';
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/MobileNav.css';
import { MobileNavItem } from './MoblieNavLI';

type MobileNavProps = {
    menuItemData?: NavItem[];
    text?: string;
}

export const MobileNav: React.FC<MobileNavProps & React.HTMLProps<HTMLDivElement>> = ({
    menuItemData, text, ...htmlProps}) => { 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ButtonRef = createRef<HTMLElement>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ButtonRef.current && !ButtonRef.current.contains(event.target)) {
            setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [ButtonRef])
    
    return (
        <nav ref={ButtonRef} id='PrimaryMobileNav' className='mobile-nav' role="navigation" aria-label="Main menu">
            <button  id='mobile-nav-button' aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            <ul className={`flexcolumn glass mobile-ul ${!isOpen ? 'closed-menu' : ''}`}>
            {isOpen && MainNavItems.map((i, k) =>
                <MobileNavItem navHref={i.href} navName={i.name} navSubItems={i.subNav} isOpen={isOpen} setIsOpen={setIsOpen}/>
            )}
            </ul>
        </nav>
    ); 
} 