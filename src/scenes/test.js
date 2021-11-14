import Phaser from "phaser";
import { selectedShurikenP1 } from "./Select.js"
import { selectedShurikenP2 } from "./Select.js"

let bg;
let m_bg;

let keyW;
let keyA;
let keyD;
let keyS;
let keySpace;

let keyM;

let timeShuriken = 0;
let delayShuriken = 400;

let shurikenP1;
let shurikenP2;

let shurikenGroupP1;
let shurikenGroupP2;

let shurikenGroupP1L;
let shurikenGroupP1R;

let shurikenGroupP2L;
let shurikenGroupP2R;

let test1 = 0;
let test2 = 0;

let cursor;

let directionP1;
let directionP2;

let player1;
let player2;

class te extends Phaser.Scene {
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

        this.anims.create({
            key: 'shurikenAni',
            frames: this.anims.generateFrameNumbers('shurikenP1', {
                start: 0,
                end: 3
            }),
            duration: 350,
            repeat: -1
        })

        shurikenGroupP1L = this.physics.add.group();
        shurikenGroupP1R = this.physics.add.group();

        shurikenGroupP2L = this.physics.add.group();
        shurikenGroupP2R = this.physics.add.group();

        shurikenGroupP1 = this.physics.add.group();
        shurikenGroupP2 = this.physics.add.group();

        cursor = this.input.keyboard.createCursorKeys();

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }
    update(delta, time) {
        //console.log("PLayer 1 : " + selectedShurikenP1);
        //console.log("Player 2 : " + selectedShurikenP2);
        //-----------------------------------------------------------------------------------------player1
        if (test1 == 0) {
            if (keyW.isDown) {
                player1.setVelocityY(-500);
                player1.anims.play('player1JumpR', true);
            } else if (keyS.isDown) {
                player1.setVelocityY(500);
                player1.anims.play('player1Stop', true);
            } else {
                player1.setVelocityY(0);
            }
            if (keyA.isDown) {
                player1.setVelocityX(-500);
                player1.anims.play('player1L', true);
                // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
                //     bulletL = this.physics.add.image(player1.x - 50, player1.y, 'bullet')
                //     bulletL.setScale(0.1);
                //     bulletL.setVelocityX(-500);
                // }
                directionP1 = 'left'

            } else if (keyD.isDown) {
                player1.setVelocityX(500);
                player1.anims.play('player1R', true);
                // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
                //     bulletR = this.physics.add.image(player1.x + 50, player1.y, 'bulletR')
                //     bulletR.setScale(0.1);
                //     bulletR.setVelocityX(500);
                // }
                directionP1 = 'right'
            } else {
                player1.anims.play('player1Stop', true);
                player1.setVelocityX(0);
            }
        }

        if (keySpace.isDown && delta >= (timeShuriken + delayShuriken)) {
            test1 = 1;
            if (directionP1 === 'right') {
                player1.anims.play('player1ShootR', true);
                this.time.addEvent({
                    delay: 500,
                    callback: function() {
                        player1.anims.play('player1Stop', true);
                        test1 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            } else {
                player1.anims.play('player1ShootL', true);
                this.time.addEvent({
                    delay: 500,
                    callback: function() {
                        player1.anims.play('player1Stop', true);
                        test1 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keySpace) && delta >= (timeShuriken + delayShuriken)) {
            if (directionP1 === 'left') {
                shurikenP1 = this.physics.add.sprite(player1.x, player1.y, 'shurikenP1');
                shurikenP1.setSize(220, 220);
                shurikenP1.anims.play('shurikenAni', true);
                shurikenP1.setScale(0.2);
                shurikenGroupP1L.add(shurikenP1);
                shurikenGroupP1L.setVelocityX(-400);
                // bulletL = this.physics.add.image(player1.x - 100, player1.y, 'bullet')
                // .setScale(0.1);
                // bulletL.setVelocityX(-800);
            } else {
                shurikenP1 = this.physics.add.sprite(player1.x, player1.y, 'shurikenP1');
                shurikenP1.setSize(220, 220);
                shurikenP1.anims.play('shurikenAni', true);
                shurikenP1.setScale(0.2);
                shurikenGroupP1R.add(shurikenP1);
                shurikenGroupP1R.setVelocityX(400);
                // bulletR = this.physics.add.image(player1.x + 100, player1.y, 'bulletR')
                // .setScale(0.1);
                // bulletR.setVelocityX(800);
            }
            timeShuriken = delta;
        }
        //-----------------------------------------------------------------------------------------//player1

        //-----------------------------------------------------------------------------------------player2
        if (test2 == 0) {
            if (cursor.up.isDown) {
                player2.setVelocityY(-500);
                player2.anims.play('player2JumpR', true);
            } else if (cursor.down.isDown) {
                player2.setVelocityY(500);
                player2.anims.play('player2Stop', true);
            } else {
                player2.setVelocityY(0);
            }
            if (cursor.left.isDown) {
                player2.setVelocityX(-500);
                player2.anims.play('player2L', true);
                // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
                //     bulletL = this.physics.add.image(player1.x - 50, player1.y, 'bullet')
                //     bulletL.setScale(0.1);
                //     bulletL.setVelocityX(-500);
                // }
                directionP2 = 'left'

            } else if (cursor.right.isDown) {
                player2.setVelocityX(500);
                player2.anims.play('player2R', true);
                // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
                //     bulletR = this.physics.add.image(player1.x + 50, player1.y, 'bulletR')
                //     bulletR.setScale(0.1);
                //     bulletR.setVelocityX(500);
                // }
                directionP2 = 'right'
            } else {
                player2.anims.play('player2Stop', true);
                player2.setVelocityX(0);
            }
        }

        if (keyM.isDown && delta >= (timeShuriken + delayShuriken)) {
            test2 = 1;
            if (directionP2 === 'right') {
                player2.anims.play('player2ShootR', true);
                this.time.addEvent({
                    delay: 500,
                    callback: function() {
                        player2.anims.play('player2Stop', true);
                        test2 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            } else {
                player2.anims.play('player2ShootL', true);
                this.time.addEvent({
                    delay: 500,
                    callback: function() {
                        player2.anims.play('player2Stop', true);
                        test2 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyM) && delta >= (timeShuriken + delayShuriken)) {
            if (directionP2 === 'left') {
                shurikenP2 = this.physics.add.sprite(player2.x, player2.y, 'shurikenP2');
                shurikenP2.setSize(220, 220);
                //shurikenP2.anims.play('shurikenAni', true);
                shurikenP2.setScale(0.2);
                shurikenGroupP2L.add(shurikenP2);
                shurikenGroupP2L.setVelocityX(-400);
            } else {
                shurikenP2 = this.physics.add.sprite(player2.x, player2.y, 'shurikenP2');
                shurikenP2.setSize(220, 220);
                //shurikenP2.anims.play('shurikenAni', true);
                shurikenP2.setScale(0.2);
                shurikenGroupP2R.add(shurikenP2);
                shurikenGroupP2R.setVelocityX(400);
            }
            timeShuriken = delta;
        }
        //-----------------------------------------------------------------------------------------//player2


    }
}

export default te;