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
        
        console.log('navigator: ', navigator.userAgent.toLowerCase().includes('mobile'))

        let isIPhone = navigator.userAgent.toLowerCase().includes('iphone');
        console.log('pointer type: ', pointerType === 'mouse')
        let width = _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? 800 : window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth;
        let height = _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? 600 : window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
        let scaleValues;
        // if (_pointerType === 'touch' || navigator.userAgent.toLowerCase().includes('mobile')){
        //     scaleValues = {
        //         mode: Phaser.Scale.FIT,
        //         autoCenter: Phaser.Scale.CENTER_BOTH
        //     }
        // }
        

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
            //   mode: _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? undefined : Phaser.Scale.FIT,
            //   autoCenter: _pointerType === 'mouse' || !navigator.userAgent.toLowerCase().includes('mobile') ? undefined : Phaser.Scale.CENTER_BOTH
            },
            scene: [TitleScene, GameScene]
          };

        useEffect(() => {
            const handleResize = () => {
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
        }, []);

        useEffect(() => {
            if (!currentGame) {
                setCurrentGame(new Phaser.Game(gameConfig))
            }
        }, [currentGame]);
    

    return (
        !isLandscape && (_pointerType === 'touch' || navigator.userAgent.toLowerCase().includes('mobile'))
        ? 
        <div className='rotate-message'>
            Rotate your screen to landscape/horizontal
        </div> 
        : 
        <div id='canvas' className={`${_pointerType === 'touch' || navigator.userAgent.toLowerCase().includes('mobile') ? 'canvas-mobile' : 'canvas-desktop'}`}/>
    ); 
} 