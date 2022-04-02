import { strictEqual } from "assert";
import { GameObjects, Textures } from "phaser";
import SharkIsland from "../objects/SharkIsland";
import ToolTip from "../objects/ToolTip";

class SharkIslandContainer extends Phaser.GameObjects.Container {
 
    constructor(scene: Phaser.Scene, x: number, y: number, children: Array<GameObjects.GameObject>) {
        super(scene, x, y, children);

        this.createObjects(x, y);
    }

    createObjects(startingX: number, startingY: number) {
        const cameraWidth = this.scene.cameras.main.worldView.width;
        const cameraHeight = this.scene.cameras.main.worldView.height;

        this.setSize(cameraWidth, cameraHeight);

        // const eastone = this.scene.add.sprite(50, -50, "back-island-east-1");
        //eastone.setSize(100,100);
        // const tween = this.scene.add.tween({
        //     targets: eastone,
        //     x: 500,
        //     ease: 'Linear',
        //     duration: 1400,y
        //     repeat: 5,
        //     yoyo: true
        // });
        // tween.play();

        const sharkisland = new SharkIsland(this.scene, 0, 0);
        this.add(sharkisland);

    }

    toolTip?: ToolTip;

    wrapSprite(obj: GameObjects.Sprite, text: string) {
        obj.setInteractive();
        obj.on('pointerover', () => {
            console.log("over: " + text);
            console.log(obj);
            
            const tooltipX = obj.x + 100;
            const tooltipY = obj.y;
            this.toolTip = new ToolTip(text, this.scene, tooltipX, tooltipY);
            this.add(this.toolTip);
        });

        obj.on('pointerout', () => {
            if (this.toolTip) {
                this.toolTip.hide();
                this.remove(this.toolTip);
            }
        });

    }



}

export default SharkIslandContainer;