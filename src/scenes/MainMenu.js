import Phaser from "phaser";

let bg;

let player1First;
let player1Second;

let buttonOK;

let arrowL;
let arrowR;

let i = 0;

let player1Selected = "ninja";

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

        this.load.spritesheet('player1First', 'src/image/Player1.png', {
            frameWidth: 123.5,
            frameHeight: 505
        });

        this.load.spritesheet('player1Second', 'src/image/ninjaR.png', {
            frameWidth: 184.5,
            frameHeight: 225
        });

        this.load.image('buttonOK', 'src/image/button.png');
    }

    create() {
        bg = this.add.image(0, 200, 'bg');
        bg.setScale(2);

        player1First = this.physics.add.sprite(210, 350, 'player1First');
        player1Second = this.physics.add.sprite(210, 350, 'player1Second');
        player1Second.setVisible();

        buttonOK = this.physics.add.image(200, 550, 'buttonOK');
        buttonOK.setScale(0.1);
        buttonOK.setInteractive();

        buttonOK.on('pointerover', () => {
            buttonOK.setScale(0.15);
        });

        buttonOK.on('pointerout', () => {
            buttonOK.setScale(0.1);
        });

        buttonOK.on('pointerdown', () => {
            buttonOK.setScale(0.1);
            this.scene.start('GameScene', { player1Selected: player1Selected });
        });

        arrowL = this.add.image(100, 500, 'arrowL');
        arrowL.setScale(0.2)
        arrowL.setInteractive();

        arrowL.on('pointerover', () => {
            arrowL.setScale(0.3);
        });

        arrowL.on('pointerout', () => {
            arrowL.setScale(0.2);
        });

        arrowL.on('pointerdown', () => {
            i--;
            console.log(i);
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

        arrowR.on('pointerdown', () => {
            i++;
            console.log(i);
            arrowR.setScale(0.2);
        });

        this.anims.create({
            key: 'player1FirstAni',
            frames: this.anims.generateFrameNumbers('player1First', {
                start: 0,
                end: 3
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1SecondAni',
            frames: this.anims.generateFrameNumbers('player1Second', {
                start: 0,
                end: 5
            }),
            duration: 500,
            repeat: -1
        })

    }

    update(delta, time) {
        player1First.anims.play('player1FirstAni', true);
        player1Second.anims.play('player1SecondAni', true);

        if (i % 2 === 0) {
            player1First.setVisible();
            player1Second.setVisible(1);
            player1Selected = "ninja";
        } else {
            player1First.setVisible(1);
            player1Second.setVisible();
            player1Selected = "nong";
        }
    }

}
export default MainMenu;
export { player1Selected };