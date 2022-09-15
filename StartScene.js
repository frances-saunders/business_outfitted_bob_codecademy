/*This project fulfills the reqs for "Business Outfitted Bob" project in Codecademy
This file is to be used in conjuncition with GameScene.js, index.html, EndScene.js, and game.js*/



class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }

  preload() {
    this.load.image('start', 'https://content.codecademy.com/courses/learn-phaser/BOB/Start%20screen.png');
  }

  create() {
    const screen = this.add.image(0, 0, 'start').setOrigin(0);
    
    // on keypress any, transition to GameScene
    this.input.keyboard.on('keydown', () => {
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
    });
  }
}

