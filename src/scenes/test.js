import Phaser from "phaser";
import { selectedShuriken } from "./Select"

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
        console.log(selectedShuriken);
    }
}

export default test;