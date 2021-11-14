import Phaser from "phaser";
import { selectedShurikenP1 } from "./Select.js"
import { selectedShurikenP2 } from "./Select.js"

let bg;

class test extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'test'
        });
    }

    preload() {
        //--------------------------------------------------------------------------Player1
        if (selectedShurikenP1 == 'shuriken1') {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
        } else if (selectedShurikenP1 == 'shuriken2') {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
        } else {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
        }

        //--------------------------------------------------------------------------//Player1

        //--------------------------------------------------------------------------Player2
        if (selectedShurikenP2 == 'shuriken1') {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
        } else if (selectedShurikenP2 == 'shuriken2') {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
        } else {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
        }
        //--------------------------------------------------------------------------//Player2

        this.load.image('fightBG', 'src/image/fightBG/bgninja.jpg');
    }

    create() {
        bg = this.add.image(0, -100, 'fightBG');
        bg.setOrigin(0, 0);
        bg.setScale(0.68);
    }
    update(delta, time) {
        //console.log("PLayer 1 : " + selectedShurikenP1);
        //console.log("Player 2 : " + selectedShurikenP2);
    }
}

export default test;