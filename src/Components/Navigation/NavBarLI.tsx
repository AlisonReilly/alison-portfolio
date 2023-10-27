import React, { createRef, useEffect, useRef, useState } from 'react';
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


        console.log('is sub open : ', isSubOpen)

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
        <li ref={LIRef} id='increment' className={`main-li`} tabIndex={mainNav.subNav ? 0 : -1} onClick={handleClick}>
                    <span id='small-tick'>{'| '.repeat(mainNav.name.replace(/\s/g, '').length * 1.75 + 4)}</span>
                    {!mainNav.subNav
                    ? <Link id='main-name-link' className='modern-link' to={mainNav.href ? mainNav.href : ''}>{mainNav.name}</Link> 
                    : <button id='main-name-button' tabIndex={-1}>{mainNav.name}</button>}
                    {mainNav.subNav && 
                    <ul  className={`glass sub-nav-ul ${isSubOpen ? 'sub-nav-ul-open' : 'sub-nav-ul-closed'}`}>{mainNav.subNav.map((si, k) => 
                        <>
                            <li  id='MainNavColor' className='flexrow bracket-wrapper'>
                                <Link className='modern-link flexrow' to={si.href ? si.href : ''}><span className='bracket'>[ </span><span className='bracket-text'>{si.name}</span></Link>    
                            </li>
                        </>
                    )}
                    </ul>}
                </li>
    ); 
} 