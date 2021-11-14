import Phaser from "phaser";

let s_bg;

let shuriken1_P1;
let shuriken2_P1;
let shuriken3_P1;

let shuriken1_P2;
let shuriken2_P2;
let shuriken3_P2;

let arrowLP1;
let arrowRP1;

let arrowLP2;
let arrowRP2;

let startButton;

let selectNumP1 = 100;
let selectNumP2 = 100;

let selectedShurikenP1 = 'shuriken1';
let selectedShurikenP2 = 'shuriken1';

let selectShurikenP1;
let selectShurikenP2;

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

        this.load.image('start', 'src/image/button/start.png');

        this.load.audio('selectShuriken', 'src/sound/selectShuriken.mp3');
    }

    create() {
        //-----------------------------------------------------------------Background
        s_bg = this.add.image(630, 400, 's_bg')
            .setScale(0.8);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------PLayer1

        //-----------------------------------------------------------------Shuriken1
        shuriken1_P1 = this.physics.add.sprite(340, 350, 'shuriken1')
            .setScale(0.5);
        shuriken1_P1.setVisible(1);

        this.anims.create({
            key: 'shuriken1Ani',
            frames: this.anims.generateFrameNumbers('shuriken1', {
                start: 0,
                end: 3
            }),
            duration: 350,
            repeat: -1
        })

        shuriken1_P1.anims.play('shuriken1Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken2
        shuriken2_P1 = this.physics.add.sprite(320, 330, 'shuriken2');
        shuriken2_P1.setVisible();

        this.anims.create({
            key: 'shuriken2Ani',
            frames: this.anims.generateFrameNumbers('shuriken2', {
                start: 0,
                end: 6
            }),
            duration: 500,
            repeat: -1
        })

        shuriken2_P1.anims.play('shuriken2Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken3
        shuriken3_P1 = this.physics.add.sprite(310, 330, 'shuriken3')
            .setScale(1);
        shuriken3_P1.setVisible();

        this.anims.create({
            key: 'shuriken3Ani',
            frames: this.anims.generateFrameNumbers('shuriken3', {
                start: 0,
                end: 7
            }),
            duration: 1000,
            repeat: -1
        })

        shuriken3_P1.anims.play('shuriken3Ani', true);
        //-----------------------------------------------------------------

        selectShurikenP1 = this.sound.add('selectShuriken').setVolume(0.5);

        //-----------------------------------------------------------------ArrowL
        arrowLP1 = this.physics.add.image(150, 360, 'arrowL')
            .setScale(0.15);
        arrowLP1.setInteractive();

        arrowLP1.on('pointerover', () => {
            arrowLP1.setScale(0.2);
        });

        arrowLP1.on('pointerout', () => {
            arrowLP1.setScale(0.15);
        });

        arrowLP1.on('pointerdown', () => {
            arrowLP1.setScale(0.15);
            selectNumP1--;
        });
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------ArrowR
        arrowRP1 = this.physics.add.image(500, 360, 'arrowR')
            .setScale(0.15);
        arrowRP1.setInteractive();

        arrowRP1.on('pointerover', () => {
            arrowRP1.setScale(0.2);
        });

        arrowRP1.on('pointerout', () => {
            arrowRP1.setScale(0.15);
        });

        arrowRP1.on('pointerdown', () => {
            arrowRP1.setScale(0.15);
            selectNumP1++;
        });
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------//Player1

        //-----------------------------------------------------------------PLayer2

        //-----------------------------------------------------------------Shuriken1
        shuriken1_P2 = this.physics.add.sprite(940, 350, 'shuriken1')
            .setScale(0.5);
        shuriken1_P2.setVisible(1);

        this.anims.create({
            key: 'shuriken1Ani',
            frames: this.anims.generateFrameNumbers('shuriken1', {
                start: 0,
                end: 3
            }),
            duration: 350,
            repeat: -1
        })

        shuriken1_P2.anims.play('shuriken1Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken2
        shuriken2_P2 = this.physics.add.sprite(940, 330, 'shuriken2');
        shuriken2_P2.setVisible();

        this.anims.create({
            key: 'shuriken2Ani',
            frames: this.anims.generateFrameNumbers('shuriken2', {
                start: 0,
                end: 6
            }),
            duration: 500,
            repeat: -1
        })

        shuriken2_P2.anims.play('shuriken2Ani', true);
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------Shuriken3
        shuriken3_P2 = this.physics.add.sprite(940, 330, 'shuriken3')
            .setScale(1);
        shuriken3_P2.setVisible();

        this.anims.create({
            key: 'shuriken3Ani',
            frames: this.anims.generateFrameNumbers('shuriken3', {
                start: 0,
                end: 7
            }),
            duration: 1000,
            repeat: -1
        })

        shuriken3_P2.anims.play('shuriken3Ani', true);
        //-----------------------------------------------------------------

        selectShurikenP1 = this.sound.add('selectShuriken').setVolume(0.5);

        //-----------------------------------------------------------------ArrowL
        arrowLP2 = this.physics.add.image(750, 360, 'arrowL')
            .setScale(0.15);
        arrowLP2.setInteractive();

        arrowLP2.on('pointerover', () => {
            arrowLP2.setScale(0.2);
        });

        arrowLP2.on('pointerout', () => {
            arrowLP2.setScale(0.15);
        });

        arrowLP2.on('pointerdown', () => {
            arrowLP2.setScale(0.15);
            selectNumP2--;
        });
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------ArrowR
        arrowRP2 = this.physics.add.image(1130, 360, 'arrowR')
            .setScale(0.15);
        arrowRP2.setInteractive();

        arrowRP2.on('pointerover', () => {
            arrowRP2.setScale(0.2);
        });

        arrowRP2.on('pointerout', () => {
            arrowRP2.setScale(0.15);
        });

        arrowRP2.on('pointerdown', () => {
            arrowRP2.setScale(0.15);
            selectNumP2++;
        });
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------//Player2

        startButton = this.physics.add.image(625, 500, 'start')
            .setScale(0.5)
            .setSize(480, 127)
            .setOffset(10, 7);
        startButton.setInteractive();

        startButton.on('pointerover', () => {
            startButton.setScale(0.6);
        })

        startButton.on('pointerout', () => {
            startButton.setScale(0.5);
        })

        startButton.on('pointerdown', () => {
            startButton.setScale(0.5);
            this.scene.start('test');
        })

    }

    update(delta, time) {
        //-----------------------------------------------------------------Check selectNum
        //console.log(selectNum);
        if (selectNumP1 % 3 == 1) {
            shuriken1_P1.setVisible(1);
            shuriken2_P1.setVisible();
            shuriken3_P1.setVisible();
            selectedShurikenP1 = "shuriken1"
            console.log("Player 1 : " + selectedShurikenP1);
        } else if (selectNumP1 % 3 == 2) {
            shuriken1_P1.setVisible();
            shuriken2_P1.setVisible(1);
            shuriken3_P1.setVisible();
            selectedShurikenP1 = "shuriken2"
            console.log("Player 1 : " + selectedShurikenP1);
        } else {
            shuriken1_P1.setVisible();
            shuriken2_P1.setVisible();
            shuriken3_P1.setVisible(1);
            selectedShurikenP1 = "shuriken3"
            console.log("Player 1 : " + selectedShurikenP1);
        }

        if (selectNumP2 % 3 == 1) {
            shuriken1_P2.setVisible(1);
            shuriken2_P2.setVisible();
            shuriken3_P2.setVisible();
            selectedShurikenP2 = "shuriken1"
            console.log("Player 2 : " + selectedShurikenP2);
        } else if (selectNumP2 % 3 == 2) {
            shuriken1_P2.setVisible();
            shuriken2_P2.setVisible(1);
            shuriken3_P2.setVisible();
            selectedShurikenP2 = "shuriken2"
            console.log("Player 2 : " + (selectedShurikenP2));
        } else {
            shuriken1_P2.setVisible();
            shuriken2_P2.setVisible();
            shuriken3_P2.setVisible(1);
            selectedShurikenP2 = "shuriken3"
            console.log("Player 2 : " + selectedShurikenP2);
        }
        //-----------------------------------------------------------------
    }
}
export default Select
export { selectedShurikenP1 };
export { selectedShurikenP2 };