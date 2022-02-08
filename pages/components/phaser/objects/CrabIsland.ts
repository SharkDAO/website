
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";


// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/container/
// converting to a
class CrabIsland extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'crab-island');

        this.scale = .5;
        this.width = 300;
        this.height = 200;
       // this.on('pointerdown', () => this.setModal(), this);

    }

}

export default CrabIsland;