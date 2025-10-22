import Phaser from "phaser";
import { PlayScene } from "./scenes/PlayScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#222222",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 512,
    height: 288
  },
  physics: {
    default: "arcade",
    arcade: { debug: false }
  },
  scene: [PlayScene]
};

new Phaser.Game(config);
