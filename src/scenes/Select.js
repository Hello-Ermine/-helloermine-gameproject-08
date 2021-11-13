import Phaser from "phaser";

let s_bg;

class Select extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Select'
        });
    }

    preload() {
        this.load.image('s_bg', 'src/image/BG/Selected_BG.jpg');
    }

    create() {
        s_bg = this.add.image(630, 400, 's_bg')
            .setScale(0.8);
    }

    update(delta, time) {

    }
}
export default Select;