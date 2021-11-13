import Phaser from "phaser";

let s_bg;

let shuriken1;
let shuriken2;
let shuriken3;

let arrowL;
let arrowR;

let selectNum;

let selectedShuriken = 'shuriken1';

class Select extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Select'
        });
    }

    preload() {
        this.load.image('s_bg', 'src/image/BG/Selected_BG.jpg');

        this.load.spritesheet('shuriken1', 'src/image/bullet/shuriken1.png', {
            frameWidth: 325,
            frameHeight: 332
        });

        this.load.spritesheet('shuriken2', 'src/image/bullet/shuriken2.png', {
            frameWidth: 169.7,
            frameElement: 210
        });

        this.load.spritesheet('shuriken3', 'src/image/bullet/shuriken3.png', {
            frameWidth: 170.125,
            frameElement: 183
        });

        this.load.image('arrowR', 'src/image/button/arrowR.jpg');

        this.load.image('arrowL', 'src/image/button/arrowL.jpg');
    }

    create() {
        //-----------------------------------------------------------------Background
        s_bg = this.add.image(630, 400, 's_bg')
            .setScale(0.8);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken1
        shuriken1 = this.physics.add.sprite(640, 350, 'shuriken1')
            .setScale(0.5);
        shuriken1.setVisible(1);

        this.anims.create({
            key: 'shuriken1Ani',
            frames: this.anims.generateFrameNumbers('shuriken1', {
                start: 0,
                end: 3
            }),
            duration: 350,
            repeat: -1
        })

        shuriken1.anims.play('shuriken1Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken2
        shuriken2 = this.physics.add.sprite(620, 330, 'shuriken2');
        shuriken2.setVisible();

        this.anims.create({
            key: 'shuriken2Ani',
            frames: this.anims.generateFrameNumbers('shuriken2', {
                start: 0,
                end: 6
            }),
            duration: 500,
            repeat: -1
        })

        shuriken2.anims.play('shuriken2Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken3
        shuriken3 = this.physics.add.sprite(610, 330, 'shuriken3')
            .setScale(1);
        shuriken3.setVisible();

        this.anims.create({
            key: 'shuriken3Ani',
            frames: this.anims.generateFrameNumbers('shuriken3', {
                start: 0,
                end: 7
            }),
            duration: 1000,
            repeat: -1
        })

        shuriken3.anims.play('shuriken3Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------ArrowL
        arrowL = this.physics.add.image(450, 360, 'arrowL')
            .setScale(0.15);
        arrowL.setInteractive();

        arrowL.on('pointerover', () => {
            arrowL.setScale(0.2);
        });

        arrowL.on('pointerout', () => {
            arrowL.setScale(0.15);
        });

        arrowL.on('pointerdown', () => {
            arrowL.setScale(0.15);
            selectNum--;
        });
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------ArrowR
        arrowR = this.physics.add.image(800, 360, 'arrowR')
            .setScale(0.15);
        arrowR.setInteractive();

        arrowR.on('pointerover', () => {
            arrowR.setScale(0.2);
        });

        arrowR.on('pointerout', () => {
            arrowR.setScale(0.15);
        });

        arrowR.on('pointerdown', () => {
            arrowR.setScale(0.15);
            selectNum++;
        });
        //-----------------------------------------------------------------
    }

    update(delta, time) {
        console.log(selectNum);
        if (selectNum % 3 === 2) {
            shuriken1.setVisible(1);
            shuriken2.setVisible();
            shuriken3.setVisible();
            selectedShuriken = "shuriken1"
            console.log(selectedShuriken);
        } else if (selectNum % 3 === 1) {
            shuriken1.setVisible();
            shuriken2.setVisible(1);
            shuriken3.setVisible();
            selectNum = "shuriken2"
            console.log(selectedShuriken);
        } else {
            selectNum = "shuriken3"
            shuriken1.setVisible();
            shuriken2.setVisible();
            shuriken3.setVisible(1);
            selectNum = "shuriken3"
            console.log(selectedShuriken);
        }
    }
}
export default Select;