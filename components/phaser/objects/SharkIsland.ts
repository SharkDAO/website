
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";

class SharkIsland extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'shark-island');

        //this.scale = .5;
        // this.width = 2000;
        // this.height = 800;
       // this.on('pointerdown', () => this.setModal(), this);

    }
}

export default SharkIsland;