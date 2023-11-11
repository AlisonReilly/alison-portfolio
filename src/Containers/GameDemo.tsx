import Phaser from 'phaser';
import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import GameScene from '../Demos/CatsDream/game/GameScene';
import TitleScene from '../Demos/CatsDream/game/TitleScene';
import { config } from '../Demos/CatsDream/game';


type GameDemoProps = {
    text?: string;
    pointerType?: string;
}

export const GameDemo: React.FC<GameDemoProps & React.HTMLProps<HTMLDivElement>> = ({
    pointerType, text }) => { 
        const [currentGame, setCurrentGame] = useState<Phaser.Game>();
        const [currentConfig, setCurrentConfig] = useState<Phaser.Types.Core.GameConfig>(config);
        const [gameReady, setGameReady] = useState(false);
        const [dimensions, setDimensions] = React.useState({ 
            width: window.innerWidth,
            height: window.innerHeight
          });
        const [_pointerType, setPointerType] = useState<string>(pointerType || 'mouse');
        const [isLandscape, setIsLandscape] = useState<boolean>(window.innerWidth > window.innerHeight)
        console.log('pointerType: ', _pointerType)
        console.log('isLandscape: ', isLandscape)
        console.log('value of cond statement: ', !isLandscape && _pointerType === 'touch')



        // if(window.innerWidth < 800) {

        // }

        // console.log('tracking window resize currentConfig: ', currentConfig)
        
        // todo, may or may not need to track window resize
        // if offering a feature that will say to turn phone or device then will need
        useEffect(() => {
            const handleResize = () => {
              setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
              })
              setCurrentConfig({...currentConfig, height: window.innerHeight, width: window.innerWidth})
              setIsLandscape(window.innerWidth > window.innerHeight)
            }
        
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize);
            };
            
        }, [])

        useEffect(() => {
            const checkPointerType = (event: any) => {
                if (event.pointerType === "mouse") { setPointerType('mouse')}
                if (event.pointerType === "touch") { setPointerType('touch')}
                if (event.pointerType === "pen") { setPointerType('pen')}
            }
            window.addEventListener('pointerdown', checkPointerType)
            return () => {
                window.removeEventListener('resize', checkPointerType);
            };
        }, [])


        // useEffect(() => {
        //     if (window.innerWidth >= 800 || window.innerWidth === currentConfig.width) {
        //         setGameReady(true)
        //     }
        // }, [currentConfig.width])

        // game resize itself now handled by game config in scale property

        // one other aspect will be to move the canvas to cover the header if we have
        // tilted the game - or do some type of open in external link
        // or not sure...
        useEffect(() => {
            if (!currentGame) {
                setCurrentGame(new Phaser.Game(config))
            }
        }, [currentGame, gameReady]);
    

    return (
        <>
            {!isLandscape && _pointerType === 'touch' ? 
                <div className='rotate-message'>
                    Rotate your screen to landscape/horizontal
                </div>
                :
                <div id='canvas'/>
            }
            
            
        </>
    ); 
} 