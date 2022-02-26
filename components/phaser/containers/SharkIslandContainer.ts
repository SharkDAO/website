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

        const eastone = this.scene.add.sprite(50, -50, "back-island-east-1");
        //eastone.setSize(100,100);
        const tween = this.scene.add.tween({
            targets: eastone,
            x: 500,
            ease: 'Linear',
            duration: 1400,
            repeat: 5,
            yoyo: true
        });
        tween.play();

        this.wrapSprite(eastone, "east island one ");
        this.add(eastone);

        const easttwo = this.scene.add.sprite(100, -100, "back-island-east-2");
        //easttwo.setSize(100, 100);
        this.wrapSprite(easttwo, "east island two ");
        this.add(easttwo);


        const westone = this.scene.add.sprite(-300, -115, "back-island-west-1");
        westone.setOrigin(0, 0);
        this.wrapSprite(westone, "west island one ");
        this.add(westone);

        const sharkisland = new SharkIsland(this.scene, 0, 100);
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