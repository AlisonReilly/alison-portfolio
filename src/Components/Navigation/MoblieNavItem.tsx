import React, { useEffect, useState } from 'react';
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/MobileNav.css';
import '../../Styles/GlassDropdown.css';
import { Link } from 'react-router-dom';

  

type MobileNavItemProps = {
    isOpen: boolean;
    setIsOpen: any;

    navName?: string;
    navSubItems?: NavItem[];
    navHref?: string;

}


export const MobileNavItem: React.FC<MobileNavItemProps & React.HTMLProps<HTMLDivElement>> = ({
    isOpen,
    setIsOpen,
    navHref, 
    navName, 
    navSubItems, 
    ...htmlProps}) => { 
    const [isSubOpen, setIsSubOpen] = useState<boolean>(false);

    // styling concerns:
    const firstLIID = !navSubItems ? 'mobile-li-no-subs' : '';
    const hasSubItems = navSubItems ? 'has-mobile-sub-items' : '';

    

    const handleKeyNav = (e: any) => {
        console.log('key: ', e.key)

    }

    const handleClick = () => {
        setIsSubOpen(!isSubOpen)
        if (!navSubItems) {
            setIsOpen(!isOpen)
        }
    }



    useEffect(() => {

    }, [])
    
    return (
        <li id={firstLIID} className='mobile-li' onKeyDown={(e) => handleKeyNav(e)} onClick={handleClick}>
            <Link className='mobile-a modern-link' to={navHref ? navHref : ''}>
                <span id={hasSubItems} className='bracket'>[ </span>
                <span id={hasSubItems} className='bracket-text'>{navName}</span>
            </Link>
            {navSubItems && isSubOpen && navSubItems.map((sn, k) => 
                <ul className='flexcolumn'>
                    <li id='mobile-sub-item' className='mobile-li sub bracket-wrapper' onClick={() => setIsOpen(!isOpen)}>
                        <Link className='modern-link' to={sn.href!}>
                            <span className='bracket'>- </span>
                            <span className='bracket-text'>{sn.name}</span>
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    ); 
} 