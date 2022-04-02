
import { infoModalState } from "../../ui/InfoModal";
import { getRecoil, setRecoil } from "recoil-nexus";
import { GameObjects, Textures } from "phaser";

import Buildings from "../objects/Buildings";


// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/container/
// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/zone/ - for some hit areas / clicks
class BuildingsContainer extends Phaser.GameObjects.Container {

    constructor(scene: Phaser.Scene, x: number, y: number, children: Array<GameObjects.GameObject>) {
        super(scene, x, y, children);

        this.createObjects(x, y);
        // set display size
        
    }



    /*
        // data, some metadata around the component
        // gameObject.on('setdata', function(gameObject, key, value){  });
        // gameObject.on('changedata', function(gameObject, key, value, previousValue)
        // gameObject.setDataEnabled();
        // gameObject.toggleData(key);
        //         gameObject.setData(key, value);
        // gameObject.incData(key, value);   
        // gameObject.setData(obj); // obj:
        // can use data to trigger animation / other things


        // state, what state is the sprite / container in
        // gameObject.setState(state);
        // figure out what state does

       //  Center the picture in the game
        Phaser.Display.Align.In.Center(pic, this.add.zone(400, 300, 800, 600));

        //  Center the sprite to the picture
        Phaser.Display.Align.In.Center(block, pic);
        */

    createObjects(startingX: number, startingY: number) {
        this.setSize(600,200);
        const shack = new Buildings(this.scene, startingX, startingY);
        this.add(shack);
    }

    

}

export default BuildingsContainer;