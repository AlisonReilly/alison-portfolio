import React, { createRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BasicDiagram } from './Diagramming/BasicDiagram';
import { TextType } from './TextEffects/TextType';
import { Link } from 'react-router-dom';

type ProfileHeaderProps = {
    isTouchScreen?: boolean;
    text?: string;
}
  
export const ProfileHeader: React.FC<ProfileHeaderProps & React.HTMLProps<HTMLDivElement>> = ({
    isTouchScreen, ...htmlProps}) => { 
    let location = useLocation();
    return ( 
        <>
            {(isTouchScreen || navigator.userAgent.toLowerCase().includes('mobile')) && location.pathname.includes('live-demo') ? <></> :
                <header id='ProfileHeader' className={`${location.pathname === '/blog' ? 'blog-header-bg' : 'primary-header-bg'}`} > 

                    <div className='flexrow'>
                        <span id='logo-diagram' className='diagram-outline-smaller flexcolumn'>
                        <Link className='modern-link' to='/'>A</Link>
                            <BasicDiagram className='diagram-text' figureNumber='1'/>
                        </span>
                        <div id='logo-text-after' className='flexrow'>
                            <TextType removeCursor={true} typeEffect='type-backspace' text='lison Reilly'/>
                        </div>
                    </div>
                </header> 
            }
        </>
    ); 
} 
