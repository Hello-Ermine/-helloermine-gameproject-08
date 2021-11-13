import Phaser from "phaser";

let MainMenu_BG;

let start_button;

let m_bg;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('MainMenuBG', 'src/image/BG/MainMenu_BG.jpg');

        this.load.image('start', 'src/image/button/start.png');

        this.load.audio('m_bg', 'src/sound/mainmenu.mp3');

    }

    create() {
        MainMenu_BG = this.add.image(650, 354, 'MainMenuBG')
            .setScale(0.7);

        start_button = this.physics.add.image(400, 450, 'start')
            .setSize(480, 127)
            .setOffset(10, 7);
        start_button.setInteractive();

        start_button.on('pointerover', () => {
            start_button.setScale(1.2);
        })

        start_button.on('pointerout', () => {
            start_button.setScale(1);
        })

        start_button.on('pointerdown', () => {
            start_button.setScale(1);
        })

        m_bg = this.sound.add('m_bg').setVolume(0.5);

        m_bg.play({ loop: true });
    }

    update(delta, time) {

    }
}
export default MainMenu;