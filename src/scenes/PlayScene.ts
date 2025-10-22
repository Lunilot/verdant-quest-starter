import Phaser from "phaser";

export class PlayScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private speed = 120;

  constructor() { super("Play"); }

  create() {
    // simple green square as player
    const g = this.add.graphics();
    g.fillStyle(0x6ecb5a, 1);
    g.fillRect(0, 0, 12, 12);
    g.generateTexture("playerTex", 12, 12);
    g.destroy();

    this.player = this.physics.add.image(256, 144, "playerTex");
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const vx = (this.cursors.left?.isDown ? -1 : 0) + (this.cursors.right?.isDown ? 1 : 0);
    const vy = (this.cursors.up?.isDown ? -1 : 0) + (this.cursors.down?.isDown ? 1 : 0);

    const len = Math.hypot(vx, vy) || 1;
    this.player.setVelocity((vx / len) * this.speed, (vy / len) * this.speed);
  }
}
