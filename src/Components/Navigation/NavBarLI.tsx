import React, { createRef, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from '../../constants/dataConstants';
import '../../Styles/MobileNav.css';
import '../../Styles/GlassDropdown.css';
import { Link } from 'react-router-dom';

  

type NavBarLIProps = {
    mainNav: NavItem;
}


export const NavBarLI: React.FC<NavBarLIProps & React.HTMLProps<HTMLDivElement>> = ({
    mainNav,
    ...htmlProps}) => { 
    const [isSubOpen, setIsSubOpen] = useState<boolean>(false);
    const LIRef = createRef<HTMLLIElement>();

    let location = useLocation();
    console.log('location: ', location.pathname)

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (LIRef.current && !LIRef.current.contains(event.target)) {
              setIsSubOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [LIRef])

    const handleClick = () => {
        setIsSubOpen(!isSubOpen)
    }

    return (
        <li key={`${mainNav.name}-main`} ref={LIRef} id='increment' className={`main-li ${location.pathname === '/blog' ? 'blog-style-border' : 'primary-style-border'}`} tabIndex={mainNav.subNav ? 0 : -1} onClick={handleClick}>
            <span id='small-tick' className={`${location.pathname === '/blog' ? 'blog-tick' : 'primary-tick'}`}>
                {'| '.repeat(mainNav.name.replace(/\s/g, '').length * 1.75 + 4)}
            </span>
            {!mainNav.subNav
                ? <Link id='main-name-link' className={`modern-link ${location.pathname === '/blog' ? 'blog-style-text' : 'primary-style-text'}`} to={mainNav.href ? mainNav.href : ''}>{mainNav.name}</Link> 
                : <button id='main-name-button' className={`${location.pathname === '/blog' ? 'blog-style-text' : 'primary-style-text'}`} tabIndex={-1}>{mainNav.name}</button>
            }
            {mainNav.subNav && 
                <ul  className={`glass sub-nav-ul ${isSubOpen ? 'sub-nav-ul-open' : 'sub-nav-ul-closed'}`}>
                    {mainNav.subNav.map((si, k) => 
                        <>
                            <li key={`${si.name}-sub`}  id='MainNavColor' className='flexrow bracket-wrapper'>
                                <Link className='modern-link flexrow' to={si.href ? si.href : ''}><span className='bracket'>[ </span><span className='bracket-text'>{si.name}</span></Link>    
                            </li>
                        </>
                    )}
                </ul>
            }
            </li>
    ); 
} 