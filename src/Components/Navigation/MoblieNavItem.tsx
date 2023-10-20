import React, { useEffect, useState } from 'react';
import { MainNavItems, NavItem } from '../../dataConstants';
import '../../Styles/MobileNav.css';
import '../../Styles/GlassDropdown.css';
import { Link } from 'react-router-dom';

  

type MobileNavItemProps = {

    navName?: string;
    navSubItems?: NavItem[];
    navHref?: string;

}


export const MobileNavItem: React.FC<MobileNavItemProps & React.HTMLProps<HTMLDivElement>> = ({
    navHref, navName, navSubItems, ...htmlProps}) => { 
    const [isSubOpen, setIsSubOpen] = useState<boolean>(false);

    const handleKeyNav = (e: any) => {
        console.log('key: ', e.key)

    }

    useEffect(() => {

    }, [])
    
    return (
        <li id={`${navSubItems ? '' : 'mobile-li-no-subs'}`} className={`mobile-li ${navSubItems ? '' : 'bracket-wrapper'}`} onKeyDown={(e) => handleKeyNav(e)}onClick={() => setIsSubOpen(!isSubOpen)}>
            <Link className='mobile-a modern-link' to={navHref ? navHref : ''}>
                <span className='bracket'>[ </span>
                <span id={`${navSubItems ? 'has-mobile-sub-items' : ''}`} className='bracket-text'>{navName}</span>
            </Link>
            {navSubItems && isSubOpen && navSubItems.map((sn, k) => 
                <ul className={`flexcolumn`} >
                    <li id='mobile-sub-item' className='mobile-li sub bracket-wrapper'>
                        <span className='bracket'>- </span>
                        <span className='bracket-text'>{sn.name}</span>
                    </li>
                </ul>
            )}
        </li>
    ); 
} 