import Phaser from "phaser";
import { m_bg } from "./GameScene"

let win2;
let bg;

let Menu;

class Player2Win extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Player2Win'
        });
    }

    preload() {
        this.load.image('player2Win', 'src/image/Win/player2Win.png');
        this.load.image('player2WinText', 'src/image/Win/player2WinText.png');

        this.load.image('bg', 'src/image/BG/white-bg.jpg');

        this.load.audio('win', 'src/sound/winSound.mp3');

        this.load.image('fightBGWin', 'src/image/fightBG/bgninja.jpg');

        this.load.image('menu', 'src/image/Win/menu.png');
    }

    create() {
        m_bg.stop();

        bg = this.add.image(0, -100, 'fightBGWin');
        bg.setOrigin(0, 0);
        bg.setScale(0.67);

        Menu = this.physics.add.image(900, 360, 'menu');
        Menu.setInteractive();

        Menu.on('pointerover', () => {
            Menu.setScale(1.2);
        });

        Menu.on('pointerout', () => {
            Menu.setScale(1);
        });

        Menu.on('pointerdown', () => {
            Menu.setScale(1);
            win2.stop();
            location.reload();
        });

        win2 = this.sound.add('win').setVolume(0.2);
        win2.play({ loop: false });

        this.add.image(350, 300, 'player2Win');
        this.add.image(350, 600, 'player2WinText').setScale(0.5);
    }

    update(delta, time) {

    }
}

export default Player2Win;
export { win2 };