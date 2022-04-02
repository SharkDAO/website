
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";

class Buildings extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'buildings');


        this.scale = .5;
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

export default Buildings;