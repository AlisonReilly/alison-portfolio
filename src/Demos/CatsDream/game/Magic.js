import Phaser from 'phaser';
// todo maybe try to make a new projectile feature
// maybe using the other phaser example that uses an arcade sprite class
var Magic = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
    initialize:
      function Magic (scene)
      {     
          Phaser.GameObjects.Sprite.call(this, scene, 0, 0, 'magic'); //this is undefined
         
          this.speed = 1;
          this.born = 0;
          this.direction = 0;
          this.xSpeed = 0;
          this.ySpeed = 0;
          this.setSize(12, 12, true);
          
      },
      fire: function (player)
      {
          this.setPosition(player.x, player.y);
          if (player.flipX)
          {
              // face left
              this.speed = Phaser.Math.GetSpeed(-1000, 1);
              
          }
          else
          {
              // face right
              this.speed = Phaser.Math.GetSpeed(1000, 1);
              
          }
          this.born = 0;
      },
      // todo still need to work on slow animation issue when on mobile .destroy() helped a little
      update: function (time, delta, enemies)
      { 
          this.x += this.speed * delta;      
          this.born += delta;
          this.scene.events.on('attack', () => {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();

            });
          if (this.born > 1000 || this.x > 800)
          {
              this.setActive(false);
              this.setVisible(false);
              this.destroy();
          }
      }
    });

    export default Magic