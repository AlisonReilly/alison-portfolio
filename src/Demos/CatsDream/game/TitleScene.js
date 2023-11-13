import Phaser from 'phaser';
import pinkscenelogo from '../assets/images/pinkscenelogo.png';

class TitleScene extends Phaser.Scene {
    constructor(){
        super({
            key: 'TitleScene'
        })
    }

    preload(){ 
        this.load.image('background', pinkscenelogo);   
    }

    create(){
        let background = this.add.image(0, 0, 'background');
        background.setOrigin(0,0);
        this.startGameText = this.add.text(200, 300, 'Welcome, Click to Play', { fontSize: '20px', fill: '#000',  backgroundColor: '#cebff5', fontFamily: 'Lucida Console'});
        this.input.once('pointerdown', function () {
        this.scene.start('GameScene');
    }, this);
       
    }

    update(){
        // console.log(this.sys.canvas.width)
    }
}

export default TitleScene