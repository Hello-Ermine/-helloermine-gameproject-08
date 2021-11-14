import Phaser from "phaser";
import { selectedShurikenP1 } from "./Select.js"
import { selectedShurikenP2 } from "./Select.js"

let bg;
let m_bg;

let keyW;
let keyA;
let keyS;
let keyD;

let cursor;

let player1;
let player2;

class test extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'test'
        });
    }

    preload() {
        //--------------------------------------------------------------------------Player1Shuriken
        if (selectedShurikenP1 == 'shuriken1') {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
        } else if (selectedShurikenP1 == 'shuriken2') {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
        } else {
            this.load.spritesheet('shurikenP1', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
        }

        //--------------------------------------------------------------------------//Player1Shuriken

        //--------------------------------------------------------------------------Player2Shuriken
        if (selectedShurikenP2 == 'shuriken1') {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
        } else if (selectedShurikenP2 == 'shuriken2') {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
        } else {
            this.load.spritesheet('shurikenP2', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
        }
        //--------------------------------------------------------------------------//Player2Shuriken

        this.load.image('fightBG', 'src/image/fightBG/bgninja.jpg');

        this.load.audio('soundBG', 'src/sound/fightBG.mp3');

        //--------------------------------------------------------------------------player1
        this.load.spritesheet('player1R', 'src/image/player/player1R.png', {
            frameWidth: 120.6,
            frameHeight: 172
        });
        this.load.spritesheet('player1L', 'src/image/player/player1L.png', {
            frameWidth: 120.6,
            frameHeight: 172
        });
        //--------------------------------------------------------------------------//player1

        //--------------------------------------------------------------------------player2
        this.load.spritesheet('player2R', 'src/image/player/player2R.png', {
            frameWidth: 120.6,
            frameHeight: 172
        });
        this.load.spritesheet('player2L', 'src/image/player/player2L.png', {
            frameWidth: 120.6,
            frameHeight: 172
        });
        //--------------------------------------------------------------------------//player2

    }

    create() {
        bg = this.add.image(0, -100, 'fightBG');
        bg.setOrigin(0, 0);
        bg.setScale(0.67);

        m_bg = this.sound.add('soundBG').setVolume(0.2);
        m_bg.play({ loop: true });

        //----------------------------------------------------------------------Player1
        player1 = this.physics.add.sprite(200, 600, 'player1R')
            .setScale(2)
            .setSize(46, 85)
            .setOffset(45, 50);

        player1.setCollideWorldBounds(true)

        this.anims.create({ //Stop
            key: 'player1Stop',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 11,
                end: 11
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //Left
            key: 'player1L',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 7,
                end: 11
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //Right
            key: 'player1R',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 0,
                end: 4
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //ShootRight
            key: 'player1ShootR',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 5,
                end: 8
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //ShootLeft
            key: 'player1ShootL',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 3,
                end: 6
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //JumpRight
            key: 'player1JumpR',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 9,
                end: 10
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //JumpLeft
            key: 'player1JumpL',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 1,
                end: 2
            }),
            duration: 500,
            repeat: -1
        });
        //----------------------------------------------------------------------//Player1

        //----------------------------------------------------------------------Player2
        player2 = this.physics.add.sprite(200, 600, 'player2R')
            .setScale(2)
            .setSize(46, 85)
            .setOffset(45, 50);
        player2.setCollideWorldBounds(true)

        this.anims.create({ //Stop
            key: 'player2Stop',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 11,
                end: 11
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //Left
            key: 'player2L',
            frames: this.anims.generateFrameNumbers('player2L', {
                start: 7,
                end: 11
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //Right
            key: 'player2R',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 0,
                end: 4
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //ShootRight
            key: 'player2ShootR',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 5,
                end: 8
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //ShootLeft
            key: 'player2ShootL',
            frames: this.anims.generateFrameNumbers('player2L', {
                start: 3,
                end: 6
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //JumpRight
            key: 'player2JumpR',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 9,
                end: 10
            }),
            duration: 500,
            repeat: -1
        });

        this.anims.create({ //JumpLeft
            key: 'player2JumpL',
            frames: this.anims.generateFrameNumbers('player2L', {
                start: 1,
                end: 2
            }),
            duration: 500,
            repeat: -1
        });
        //----------------------------------------------------------------------//Player2

        cursor = this.input.keyboard.createCursorKeys();

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }
    update(delta, time) {
        //console.log("PLayer 1 : " + selectedShurikenP1);
        //console.log("Player 2 : " + selectedShurikenP2);
        if (keyW.isDown) {
            player1.setVelocityY(-500);
            player1.anims.play('player1JumpR', true);
        } else if (keyS.isDown) {
            player1.setVelocityY(500);
        } else {
            player1.setVelocityY(0);
        }
        if (keyA.isDown) {
            player1.setVelocityX(-500);
        } else if (keyD.isDown) {
            player1.setVelocityX(500);
        } else {
            player1.setSize(40, 85)
                .setOffset(30, 50);
            player1.anims.play('player1Stop', true);
            player1.setVelocityX(0);
        }

        if (cursor.up.isDown) {
            player2.setVelocityY(-500);
        } else if (cursor.down.isDown) {
            player2.setVelocityY(500);
        } else {
            player2.setVelocityY(0);
        }
        if (cursor.left.isDown) {
            player2.setVelocityX(-500);
        } else if (cursor.right.isDown) {
            player2.setVelocityX(500);
        } else {
            player2.setVelocityX(0);
        }
    }
}

export default test;