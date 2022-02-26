
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { Textures } from "phaser";
import ToolTip from "./ToolTip";


// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/container/
// converting to a
class CrabIsland extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'crab-island');

        this.scale = .5;
        this.width = 300;
        this.height = 200;
       // this.on('pointerdown', () => this.setModal(), this);
    //     this.setInteractive(true);
    //    let toolTip:ToolTip;

    //     this.on('pointerover', () => {
    //         console.log("Is this working over crab island ? ");
    //         const tooltipX = this.getRightCenter().x - 20;
    //         const tooltipY = this.y - 20;
    //         toolTip = new ToolTip("crabt island ", this.scene, tooltipX, tooltipY);
    //         this.scene.add.existing(toolTip);
    //     });

    //     this.on('pointerout', () => {
    //         if (toolTip) {
    //             toolTip.hide();
    //         }
    //     });


    }

}

export default CrabIsland;