import { GameObjects, Textures } from "phaser";


class ToolTip extends Phaser.GameObjects.Container {

    tiptext: string;

    constructor(message:string, scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, []);
        this.tiptext = message;
        this.createObjects(x, y);
    }

    createObjects(startingX: number, startingY: number) {
        const textPadding = 20;
        const text = this.scene.add.text(textPadding, textPadding, this.tiptext, { color: '#000' })
        const background = this.scene.add.rectangle(0, 0, text.displayWidth + (textPadding * 2), text.displayHeight + (textPadding * 2), 0xffffff).setOrigin(0, 0)
        this.add(background);
        this.add(text);
    }

    hide() {
        this.setVisible(false)
    }
}


export default ToolTip;