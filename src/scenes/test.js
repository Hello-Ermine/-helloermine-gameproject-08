import Phaser from "phaser";
import { selectedShurikenP1 } from "./Select.js"
import { selectedShurikenP2 } from "./Select.js"

class test extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'test'
        });
    }

    preload() {


    }

    create() {

    }
    update(delta, time) {
        console.log("PLayer 1 : " + selectedShurikenP1);
        console.log("Player 2 : " + selectedShurikenP2);
    }
}

export default test;