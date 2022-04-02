
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";

class FrontIslands extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'front-islands');

        // this.scale = .5; // TODO scale images first
        // this.width = 300;
        // this.height = 300;
       // this.on('pointerdown', () => this.setModal(), this);

    }
}

export default FrontIslands;