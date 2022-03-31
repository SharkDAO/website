
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";

class SharkIsland extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'shark-island');

        this.scale = .5;
        this.width = scene.cameras.main.width + 100;
        this.height = scene.cameras.main.height + 100;
       // this.on('pointerdown', () => this.setModal(), this);

    }
}

export default SharkIsland;