
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";

class CrabShack extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'crabshack');

        this.width = 300;
        this.height = 300;
        this.setInteractive({ useHandCursor: true });
        this.on('pointerdown', () => this.setModal(), this);

    }

    drawBox() {
        // TODO some setup
    }

    setModal() {
        console.log("clicked on ");
        const modalState = getRecoil(infoModalState);
        if (modalState) return;
        setRecoil(infoModalState, true);
    }
}

export default CrabShack;