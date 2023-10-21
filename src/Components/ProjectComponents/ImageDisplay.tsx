import React, { useEffect, useState } from 'react';
import wall from '../../assets/images/wall.png';

  

type ImageDisplayProps = {
    text?: string;


}

export const ImageDisplay: React.FC<ImageDisplayProps & React.HTMLProps<HTMLDivElement>> = ({
    text, }) => { 
    const [welcomeTimingMet, setWelcomeTimingMet] = useState<boolean>(false);


    useEffect(() => {

    }, [])
    // style={{ backgroundImage: wall }}
    return (
        <div id='ImageDisplay' >
            
        <img src={wall}/>
        </div>
    ); 
} 