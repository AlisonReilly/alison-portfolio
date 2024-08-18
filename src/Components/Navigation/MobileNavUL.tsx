import React, { createRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MainNavItems, NavItem } from '../../constants/dataConstants';
import '../../Styles/MobileNav.css';
import { MobileNavItem } from './MoblieNavLI';

interface MobileNavProps {
    isTouchScreen?: boolean;
    menuItemData?: NavItem[];
    text?: string;
}

export const MobileNav: React.FC<MobileNavProps & React.HTMLProps<HTMLDivElement>> = ({
    isTouchScreen, menuItemData, text, ...htmlProps}) => { 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const NavRef = createRef<HTMLElement>();

    let location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (NavRef.current && !NavRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [NavRef])
    
    return (
        <nav 
            ref={NavRef} 
            id='PrimaryMobileNav' 
            className={`${(isTouchScreen || navigator.userAgent.toLowerCase().includes('mobile')) && location.pathname.includes('live-demo') 
                ? 'game-demo-nav' 
                : 'mobile-nav'}`
            } 
            role="navigation" aria-label="Main menu"
        >
            <button 
                id='mobile-nav-button'
                className='glassMainMenu' 
                aria-expanded={isOpen} 
                onClick={() => setIsOpen(!isOpen)}>
                    <span className='material-icons'>apps</span>
            </button>
            <ul className={`flexcolumn glass mobile-ul ${!isOpen ? 'closed-menu' : ''}`}>
            {isOpen && MainNavItems.map((i, k) =>
                <MobileNavItem navHref={i.href} navName={i.name} navSubItems={i.subNav} isOpen={isOpen} setIsOpen={setIsOpen}/>
            )}
            </ul>
        </nav>
    ); 
} 