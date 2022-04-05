const Scene1 = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function Scene1() {
    Phaser.Scene.call(this, { key: 'Scene1' });
  },
  create() {
    let text = this.add
      .text(game.config.width / 2, game.config.height / 2, 'This is Scene 1.', {
        fontSize: '40px',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    this.input.on('pointerdown', (pointer) => {
      this.scene.start('Scene2');
    });
  },
});

const Scene2 = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function Scene1() {
    Phaser.Scene.call(this, { key: 'Scene2' });
  },
  create() {
    let text = this.add
      .text(game.config.width / 2, game.config.height / 2, 'This is Scene 2.', {
        fontSize: '40px',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    this.input.on('pointerdown', (pointer) => {
      this.scene.start('Scene1');
    });
  },
});

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  backgroundColor: 'black',
  parent: 'container',
  scene: [Scene1, Scene2],
};

const game = new Phaser.Game(config);
