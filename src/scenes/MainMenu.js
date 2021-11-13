import Phaser from "phaser";

let MainMenu_BG;

let start_button;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('MainMenuBG', 'src/image/BG/MainMenu_BG.jpg');

        this.load.image('start', 'src/image/button/start.png');

    }

    create() {
        MainMenu_BG = this.add.image(650, 354, 'MainMenuBG')
            .setScale(0.7);

        start_button = this.add.image(400, 450, 'start');
        start_button.setInteractive();

        start_button.on('pointerover', () => {
            start_button.setScale(1.2);
        })

        start_button.on('pointerdown', () => {
            start_button.setScale(1);
        })
    }

    update(delta, time) {

    }
}
export default MainMenu;