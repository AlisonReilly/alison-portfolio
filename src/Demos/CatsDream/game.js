import Phaser from 'phaser';
import GameScene from './game/GameScene.js'
import TitleScene from './game/TitleScene.js'


export let config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,
    parent: 'canvas',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false
      }
  },
    scene: [TitleScene, GameScene]
  };

 