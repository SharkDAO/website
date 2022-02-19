import Phaser, { GameObjects } from "phaser";
import MainScene from "./MainScene";


export const viewportWidth = window.innerWidth * window.devicePixelRatio;
export const viewportHeight = (window.innerHeight * window.devicePixelRatio) - 150;
export const worldWidth = Math.max(window.innerWidth, 2000);
export const worldHeight = Math.max(window.innerHeight, 1500);


export const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'hero',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: viewportWidth,
        height: viewportHeight
    },
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        },
        matter: {
            debug: true,
            gravity: { y: 0.5 }
        }
    },
    scene: MainScene
};

class World extends Phaser.Game {
    constructor() {
        super(config);
    }

}

export default World;