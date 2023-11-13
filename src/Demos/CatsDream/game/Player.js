import Phaser from 'phaser';
import Button from 'phaser3-rex-plugins/plugins/button.js';
export default class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'player');
        this.scene = scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.setCollideWorldBounds(true);
        this.scene.anims.create({
            // changed from left to walking to apply flipX instead
            key: 'walking',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
          });
      
        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 3 } ],
            frameRate: 20
        });

        this.scene.anims.create({
            key: 'fire',
            frames: [ { key: 'player', frame: 4 } ],
            framesRate: 20
        });
    }

  
    create(){

        this.scene.FireButton = new Button(this.scene.FireButtonSetup, {
            enable: true,
            mode: 'press',
            clickInterval: 8,
            threshold: undefined
        });
    }

    update(cursors, scene, enemies){
        if(cursors.left.isDown){
            this.flipX = true;
            this.setVelocityX(-160);
            this.anims.play('walking', true);

        } else if (cursors.right.isDown){
            this.flipX = false;
            this.setVelocityX(160);
            this.anims.play('walking', true);
        } else { 
            this.setVelocityX(0);
            this.anims.play('turn', true);
        };

        if(cursors.up.isDown){
            this.setVelocityY(-160);
            this.anims.play('walking', true);

        } else if (cursors.down.isDown){
            this.setVelocityY(160);
            this.anims.play('walking', true);
        } else {   
            this.setVelocityY(0); 
        };


        if (this.scene.FireButton){
            this.scene.FireButton.on('click', () => {
                this.setVelocity(0);
                this.anims.play('fire', true);

                var magic = scene.magics.get();
                magic.setActive(true);
                magic.setVisible(true);

                if (magic) {   
                    magic.fire(this);
                    scene.physics.add.overlap(magic, enemies, this.hitAnEnemy, null, scene);
                } 
            })
        }

        if (!this.scene.joystick){
            if (cursors.space && cursors.space.isDown) {
                this.setVelocity(0);
                this.anims.play('fire', true);

                var magic = scene.magics.get();
                magic.setActive(true);
                magic.setVisible(true);

                if (magic) {   
                    magic.fire(this);

                    // doesn't work, keeping as a note or reference
                    // scene.physics.add.collider(magic, this.layer_collision);

                    // works
                    scene.physics.add.overlap(magic, enemies, this.hitAnEnemy, null, scene);
                } 
            }
        }
    }

    hitAnEnemy(magic, enemy){
        // this.attack += 1;
        // console.log(this.attack)
        // this.attackText.setText('Enemies banished: ' + this.attack);
        
        enemy.disableBody(true, true);
        this.events.emit('attack');
    };  
}