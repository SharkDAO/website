
import { threadId } from 'worker_threads';
import JsonPack from '../assets/asset-pack.json';
import SharkIslandContainer from './containers/SharkIslandContainer';
import { worldHeight, worldWidth } from './World';
import BuildingsContainer from './containers/BuildingsContainer';
import FrontIslands from './objects/FrontIslands';

// TODO move to recoilState
let player: Phaser.GameObjects.Sprite;
let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

class MainScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'MainScene'
        });
    }

    preload() {
        this.cameras.main.transparent = true;
        //this.cameras.main.setBackgroundColor(0x004C83);
        this.load.addPack(JsonPack, 'preload');
        this.input.mouse.enabled = true;
    }

    create() {
        const position = window.innerWidth / 2;


        const camera = this.cameras.main;
        const x = (position - camera.worldView.x) * camera.zoom;
        const y = ((window.innerHeight / 2) - camera.worldView.y) * camera.zoom;

        const sharkisland = new SharkIslandContainer(this, camera.worldView.x + position, camera.worldView.y + (camera.worldView.height/2), []);
        this.add.existing(sharkisland);

        const smallislandSpread = 200;

        // http://labs.phaser.io/edit.html?src=src%5Cphysics%5Carcade%5Csimple%20body.js
        // add coin animation 
        console.log(this.sys);
        
        
        const buildings = new BuildingsContainer(this, x/2, (y/2) + 5, []);
        this.add.existing(buildings);

        const frontislands = new FrontIslands(this, x, y);
        this.add.existing(frontislands);

        player = this.add.sprite(position, (window.innerHeight / 2), 'player');
        //player.setVisible(true);
        player.setAlpha(0, 0);
        this.physics.add.existing(player);
    

        // game.physics.p2.enable(player);

        cursors = this.input.keyboard.createCursorKeys();
        // https://github.com/photonstorm/phaser3-examples/blob/master/public/src/scalemanager/zoom%20manual%20resize.js
        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, -15);
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);

        //this.physics.world.setBounds(0, 0, worldWidth, worldHeight, true, true, true, true);
        this.cameras.main.startFollow(player, true, 0.5, 0.5);
        player.setActive(true);
        this.input.on('gameobjectdown', this.onObjectClicked);
    }

    onObjectClicked(pointer: any, gameObject: any) {
        console.log("game object is ", gameObject);
    }

    checkWorldLimits = (x: number, y: number): boolean => {

        console.log(`trying to move to ${x} x ${y} `);
        this.cameras.main.getBounds().contains(x, y);

        //return true;
        return this.physics.world.bounds.contains(x, y);
    };

    update() {
        if (!this.scene.isActive()) {
            this.scene.start('MainScene');
        }


        if (cursors.up.isDown) {
            const playerY = player.y - 50;

            if (this.checkWorldLimits(player.x, playerY)) {
                // .tween.updateTo("x", this.x);
                player.setPosition(player.x, playerY);
            }
            // player.body.position.y += 300;
        }
        else if (cursors.down.isDown) {
            const playerY = player.y + 50;

            if (this.checkWorldLimits(player.x, playerY)) {
                player.setPosition(player.x, playerY);
            }
            // player.body.position.y -= 300;
        }

        if (cursors.left.isDown) {
            const playerX = player.x - 50;

            if (this.checkWorldLimits(playerX, player.y)) {
                player.setPosition(playerX, player.y);
            }

            // player.body.velocity.x = -300;
        }
        else if (cursors.right.isDown) {
            const playerX = player.x + 50;

            if (this.checkWorldLimits(playerX, player.y)) {
                player.setPosition(playerX, player.y);
            }

        }

    }

    render() {
        // this.game.debug.cameraInfo(game.camera, 32, 32);
        // this.game.debug.spriteCoords(player, 32, 500);

    }
}

export default MainScene;
