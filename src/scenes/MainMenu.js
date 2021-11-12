import Phaser from "phaser";

let bg;

let arrowL;
let arrowR;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('arrowL', 'src/image/ArrowL.png');
        this.load.image('arrowR', 'src/image/ArrowR.png');

        this.load.image('bg', 'src/image/bg.jpg');
    }

    create() {
        bg = this.add.image(0, 200, 'bg');
        bg.setScale(2);

        arrowL = this.add.image(100, 500, 'arrowL');
        arrowL.setScale(0.2)
        arrowL.setInteractive();

        arrowL.on('pointerover', () => {
            arrowL.setScale(0.3);
        });

        arrowL.on('pointerout', () => {
            arrowL.setScale(0.2);
        });

        arrowR = this.add.image(300, 500, 'arrowR');
        arrowR.setScale(0.2);
        arrowR.setInteractive();

        arrowR.on('pointerover', () => {
            arrowR.setScale(0.3);
        });

        arrowR.on('pointerout', () => {
            arrowR.setScale(0.2);
        });
    }

    update(delta, time) {

    }
}
export default MainMenu;