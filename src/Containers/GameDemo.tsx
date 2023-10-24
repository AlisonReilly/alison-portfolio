import Phaser from 'phaser';
import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import { config } from '../Demos/CatsDream/game';

type GameDemoProps = {
    text?: string;
}

export const GameDemo: React.FC<GameDemoProps & React.HTMLProps<HTMLDivElement>> = ({
    text }) => { 
        const [currentGame, setCurrentGame] = useState<Phaser.Game>();

        useEffect(() => {
            if (!currentGame) {
                setCurrentGame(new Phaser.Game(config))
            }
        })

    return (
        <div id='canvas'/>
    ); 
} 