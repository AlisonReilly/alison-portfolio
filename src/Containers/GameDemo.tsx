import Phaser from 'phaser';
import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import GameScene from '../Demos/CatsDream/game/GameScene';
import TitleScene from '../Demos/CatsDream/game/TitleScene';


type GameDemoProps = {
    pointerType?: string;
}

export const GameDemo: React.FC<GameDemoProps & React.HTMLProps<HTMLDivElement>> = ({ pointerType }) => { 
        const [currentGame, setCurrentGame] = useState<Phaser.Game>();
        const [_pointerType, setPointerType] = useState<string>(pointerType || 'mouse');
        const [isLandscape, setIsLandscape] = useState<boolean>(window.innerWidth > window.innerHeight);
        const [gameReady, setGameReady] = useState<boolean>(window.innerWidth > window.innerHeight);

        let isIPhone = navigator.userAgent.toLowerCase().includes('iphone');

        let width = _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? 800 : window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth;
        let height = _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? 600 : window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;

        let gameConfig = {
            type: Phaser.AUTO, 
            width: width,
            height: height,
            parent: 'canvas',
            pixelArt: true,
            physics: {
              default: 'arcade',
              arcade: {
                  gravity: { y: 0 },
                  debug: false
              },
            },
            scale: {
            //  mode: _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? undefined : Phaser.Scale.FIT,
            //  autoCenter: _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? undefined : Phaser.Scale.CENTER_BOTH
            },
            scene: [TitleScene, GameScene]
          };

        useEffect(() => {
            const handleResize = () => {
                setIsLandscape(window.innerWidth > window.innerHeight)
                setGameReady(window.innerWidth > window.innerHeight)
            }
        
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [])

        // todo, userAgent check for mobile in string seems to be sufficient so may not need this, same in other components
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
        }, []);

        useEffect(() => {
            let game: Phaser.Game;
            if (!currentGame && gameReady) {
                game = new Phaser.Game(gameConfig)
                setCurrentGame(game)
            }

        }, [currentGame, gameReady]);
    

    return (
        !isLandscape && (_pointerType === 'touch' || navigator.userAgent.toLowerCase().includes('mobile'))
        ? 
        <div className='rotate-message'>
            <div>Rotate your screen to landscape/horizontal</div>
            
        </div> 
        : 
        <div id='canvas' className={`${_pointerType === 'touch' || navigator.userAgent.toLowerCase().includes('mobile') ? 'canvas-mobile' : 'canvas-desktop'}`}/>
    ); 
} 