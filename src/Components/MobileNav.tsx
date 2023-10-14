import React, { useEffect, useState } from 'react';

  

type MobileNavProps = {
    text?: string;
    
}

export const MobileNav: React.FC<MobileNavProps & React.HTMLProps<HTMLDivElement>> = ({
    text, ...htmlProps}) => { 
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {

    }, [])
    
    return (
        <nav role="navigation" aria-label="Main menu">
            <button aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <svg aria-hidden="true" focusable="false">[…]</svg>
                    Menu
            </button>
            <ul className="visible">
                
            </ul>
</nav>
    ); 
} 