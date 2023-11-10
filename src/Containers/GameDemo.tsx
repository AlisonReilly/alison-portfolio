import Phaser from 'phaser';
import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import GameScene from '../Demos/CatsDream/game/GameScene';
import TitleScene from '../Demos/CatsDream/game/TitleScene';
import { config } from '../Demos/CatsDream/game';
import { use } from 'matter';

type GameDemoProps = {
    text?: string;
}

export const GameDemo: React.FC<GameDemoProps & React.HTMLProps<HTMLDivElement>> = ({
    text }) => { 
        const [currentGame, setCurrentGame] = useState<Phaser.Game>();
        const [currentConfig, setCurrentConfig] = useState<Phaser.Types.Core.GameConfig>(config);
        const [gameReady, setGameReady] = useState(false);
        const [dimensions, setDimensions] = React.useState({ 
            width: window.innerWidth,
            height: window.innerHeight
          })

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
            }
        
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize);
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
        <div id='canvas'/>
    ); 
} 