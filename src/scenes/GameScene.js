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

let nP1 = 0;
let nP2 = 0;

let player1HealthBar = 10;
let player2HealthBar = 10;

let cursor;
let keyCursorUp;

let typeOfShurikenP1;
let typeOfShurikenP2;

let directionP1 = 'right';
let directionP2 = 'left';

let player1;
let player2;

let p1Heart;
let p1HeartGroup;

let p2Heart;
let p2HeartGroup;

let countP1 = 0;
let countP2 = 0;

let countShurikenP1 = 0;
let countShurikenP2 = 0;

let countScene = 0;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //--------------------------------------------------------------------------Player1Shuriken
        if (selectedShurikenP1 == 'shuriken1') {
            this.load.spritesheet('shuriken1P1', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
            typeOfShurikenP1 = 'shuriken1P1';
            nP1 = 3;
        } else if (selectedShurikenP1 == 'shuriken2') {
            this.load.spritesheet('shuriken2P1', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
            typeOfShurikenP1 = 'shuriken2P1';
            nP1 = 5;
        } else {
            this.load.spritesheet('shuriken3P1', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
            typeOfShurikenP1 = 'shuriken3P1';
            nP1 = 7;
        }

        //--------------------------------------------------------------------------//Player1Shuriken

        //--------------------------------------------------------------------------Player2Shuriken
        if (selectedShurikenP2 == 'shuriken1') {
            this.load.spritesheet('shuriken1P2', 'src/image/bullet/shuriken1.png', {
                frameWidth: 325,
                frameHeight: 332
            });
            typeOfShurikenP2 = 'shuriken1P1';
            nP2 = 3;
        } else if (selectedShurikenP2 == 'shuriken2') {
            this.load.spritesheet('shuriken2P2', 'src/image/bullet/shuriken2.png', {
                frameWidth: 169.7,
                frameElement: 210
            });
            typeOfShurikenP2 = 'shuriken2P2';
            nP2 = 5;
        } else {
            this.load.spritesheet('shuriken3P2', 'src/image/bullet/shuriken3.png', {
                frameWidth: 170.125,
                frameElement: 183
            });
            typeOfShurikenP2 = 'shuriken3P2';
            nP2 = 7;
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

        this.load.image('heal', 'src/image/HealthBar/heal.png');
    }

    create() {
        bg = this.add.image(0, -100, 'fightBG');
        bg.setOrigin(0, 0);
        bg.setScale(0.67);

        m_bg = this.sound.add('soundBG').setVolume(0.1);
        m_bg.play({ loop: true });

        p1HeartGroup = this.physics.add.group();
        p2HeartGroup = this.physics.add.group();

        for (let healCountP1 = 0; healCountP1 < 10; healCountP1++) {
            p1Heart = this.physics.add.image(100 + healCountP1 * 35, 50, 'heal').setScale(0.1);
            p1HeartGroup.add(p1Heart);
        }

        for (let healCountP2 = 0; healCountP2 < 10; healCountP2++) {
            p2Heart = this.physics.add.image(850 + healCountP2 * 35, 50, 'heal').setScale(0.1);
            p2HeartGroup.add(p2Heart);
        }

        //----------------------------------------------------------------------Player1
        player1 = this.physics.add.sprite(200, 650, 'player1R')
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
        player2 = this.physics.add.sprite(1100, 650, 'player2R')
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
            key: 'shurikenAniP1',
            frames: this.anims.generateFrameNumbers(typeOfShurikenP1, {
                start: 0,
                end: nP1
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'shurikenAniP2',
            frames: this.anims.generateFrameNumbers(typeOfShurikenP2, {
                start: 0,
                end: nP2
            }),
            duration: 500,
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

        keyCursorUp = cursor.up;

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }
    update(delta, time) {
        //console.log("PLayer 1 : " + selectedShurikenP1);
        //console.log("Player 2 : " + selectedShurikenP2);

        this.physics.add.overlap(shurikenGroupP1R, player2, (S, R) => {
            R.destroy();
            player2HealthBar--;
            for (let i = p2HeartGroup.getChildren().length - 1; i >= 0; i--) {
                if (player2HealthBar < i + 1) {
                    p2HeartGroup.getChildren()[i].setVisible(false);
                } else {
                    p2HeartGroup.getChildren()[i].setVisible(true);
                }
            }
            if (player2HealthBar <= 0) {
                //console.log('Player1 Win');
            }
            // console.log('Health Player2 : ' + player2HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP1L, player2, (S, R) => {
            R.destroy();
            player2HealthBar--;
            for (let i = p2HeartGroup.getChildren().length - 1; i >= 0; i--) {
                if (player2HealthBar < i + 1) {
                    p2HeartGroup.getChildren()[i].setVisible(false);
                } else {
                    p2HeartGroup.getChildren()[i].setVisible(true);
                }
            }
            if (player2HealthBar <= 0) {
                //console.log('Player1 Win');
            }
            //console.log('Health Player2 : ' + player2HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP2R, player1, (S, R) => {
            R.destroy();
            player1HealthBar--;
            for (let i = p1HeartGroup.getChildren().length - 1; i >= 0; i--) {
                if (player1HealthBar < i + 1) {
                    p1HeartGroup.getChildren()[i].setVisible(false);
                } else {
                    p1HeartGroup.getChildren()[i].setVisible(true);
                }
            }
            if (player1HealthBar <= 0) {
                //console.log('Player2 Win');
            }
            //console.log('Health Player1 : ' + player1HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP2L, player1, (S, R) => {
            R.destroy();
            player1HealthBar--;
            for (let i = p1HeartGroup.getChildren().length - 1; i >= 0; i--) {
                if (player1HealthBar < i + 1) {
                    p1HeartGroup.getChildren()[i].setVisible(false);
                } else {
                    p1HeartGroup.getChildren()[i].setVisible(true);
                }
            }
            if (player1HealthBar <= 0) {
                //console.log('Player2 Win');
            }
            //console.log('Health Player1 : ' + player1HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP1L, shurikenGroupP2L, (S, R) => {
            R.destroy();
            S.destroy();
        })

        this.physics.add.overlap(shurikenGroupP1R, shurikenGroupP2R, (S, R) => {
            R.destroy();
            S.destroy();
        })

        this.physics.add.overlap(shurikenGroupP1L, shurikenGroupP2R, (S, R) => {
            R.destroy();
            S.destroy();
        })

        this.physics.add.overlap(shurikenGroupP1R, shurikenGroupP2L, (S, R) => {
            R.destroy();
            S.destroy();
        })

        //-----------------------------------------------------------------------------------------player1
        if (test1 == 0) {
            if (Phaser.Input.Keyboard.JustDown(keyW)) {
                countP1++;
                if (countP1 <= 5) {
                    if (directionP1 == 'right') {
                        player1.x = player2.x + 100;
                    } else {
                        player1.x = player2.x - 100;
                    }
                } else {
                    player1.x = player1.x;
                    setTimeout(function() { countP1 = 0, console.log(countP1) }, 5000);
                }
                console.log('countP1 = ' + countP1);
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

        if (keySpace.isDown) {
            test1 = 1;
            if (directionP1 === 'right') {
                player1.anims.play('player1ShootR', true);
                this.time.addEvent({
                    delay: 0,
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
                    delay: 0,
                    callback: function() {
                        player1.anims.play('player1Stop', true);
                        test1 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            countShurikenP1++;
            if (countShurikenP1 <= 2) {
                if (directionP1 === 'left') {
                    shurikenP1 = this.physics.add.sprite(player1.x, player1.y, typeOfShurikenP1);
                    shurikenP1.setSize(220, 220);
                    shurikenP1.anims.play('shurikenAniP1', true);
                    if (selectedShurikenP1 == 'shuriken1') {
                        shurikenP1.setScale(0.2);
                    } else if (selectedShurikenP1 == 'shuriken2') {
                        shurikenP1.setScale(0.4);
                    } else if (selectedShurikenP1 == 'shuriken3') {
                        shurikenP1.setScale(0.5);
                    }
                    shurikenGroupP1L.add(shurikenP1);
                    shurikenGroupP1L.setVelocityX(-400);
                    // bulletL = this.physics.add.image(player1.x - 100, player1.y, 'bullet')
                    // .setScale(0.1);
                    // bulletL.setVelocityX(-800);
                } else {
                    shurikenP1 = this.physics.add.sprite(player1.x, player1.y, typeOfShurikenP1);
                    shurikenP1.setSize(220, 220);
                    shurikenP1.anims.play('shurikenAniP1', true);
                    if (selectedShurikenP1 == 'shuriken1') {
                        shurikenP1.setScale(0.2);
                    } else if (selectedShurikenP1 == 'shuriken2') {
                        shurikenP1.setScale(0.4);
                    } else if (selectedShurikenP1 == 'shuriken3') {
                        shurikenP1.setScale(0.5);
                    }
                    shurikenGroupP1R.add(shurikenP1);
                    shurikenGroupP1R.setVelocityX(400);
                    // bulletR = this.physics.add.image(player1.x + 100, player1.y, 'bulletR')
                    // .setScale(0.1);
                    // bulletR.setVelocityX(800);
                }
            } else {
                setTimeout(() => {
                    countShurikenP1 = 0
                }, 2000);
            }
        }
        //-----------------------------------------------------------------------------------------//player1

        //-----------------------------------------------------------------------------------------player2
        if (test2 == 0) {
            if (Phaser.Input.Keyboard.JustDown(keyCursorUp)) {
                countP2++;
                if (countP2 <= 5) {
                    if (directionP2 == 'right') {
                        player2.x = player1.x + 100;
                    } else {
                        player2.x = player1.x - 100;
                    }
                } else {
                    player2.x = player2.x;
                    setTimeout(function() { countP2 = 0, console.log(countP2) }, 5000);
                }
                console.log('countP2 = ' + countP2);
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

        if (keyM.isDown) {
            test2 = 1;
            if (directionP2 === 'right') {
                player2.anims.play('player2ShootR', true);
                this.time.addEvent({
                    delay: 0,
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
                    delay: 0,
                    callback: function() {
                        player2.anims.play('player2Stop', true);
                        test2 = 0;
                    },
                    callbackScope: this,
                    loop: false,
                });
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            countShurikenP2++;
            if (countShurikenP2 <= 2) {
                if (directionP2 === 'left') {
                    shurikenP2 = this.physics.add.sprite(player2.x, player2.y, typeOfShurikenP2);
                    shurikenP2.setSize(220, 220);
                    shurikenP2.anims.play('shurikenAniP2', true);
                    if (selectedShurikenP2 == 'shuriken1') {
                        shurikenP2.setScale(0.2);
                    } else if (selectedShurikenP2 == 'shuriken2') {
                        shurikenP2.setScale(0.4);
                    } else if (selectedShurikenP2 == 'shuriken3') {
                        shurikenP2.setScale(0.5);
                    }
                    shurikenGroupP2L.add(shurikenP2);
                    shurikenGroupP2L.setVelocityX(-400);
                } else {
                    shurikenP2 = this.physics.add.sprite(player2.x, player2.y, typeOfShurikenP2);
                    shurikenP2.setSize(220, 220);
                    shurikenP2.anims.play('shurikenAniP2', true);
                    if (selectedShurikenP2 == 'shuriken1') {
                        shurikenP2.setScale(0.2);
                    } else if (selectedShurikenP2 == 'shuriken2') {
                        shurikenP2.setScale(0.4);
                    } else if (selectedShurikenP2 == 'shuriken3') {
                        shurikenP2.setScale(0.5);
                    }
                    shurikenGroupP2R.add(shurikenP2);
                    shurikenGroupP2R.setVelocityX(400);
                }
            } else {
                setTimeout(() => {
                    countShurikenP2 = 0
                }, 2000);
            }
        }

        // setTimeout(function() { countScene++ }, 5000);
        // if (countScene >= 1) {
        //     this.scene.start('Select');
        // }

        //-----------------------------------------------------------------------------------------//player2

        for (let i = 0; i < shurikenGroupP1R.getChildren().length; i++) {
            if (shurikenGroupP1R.getChildren()[i].x >= 1280) {
                shurikenGroupP1R.getChildren()[i].destroy();
            }
        }

        for (let k = 0; k < shurikenGroupP1L.getChildren().length; k++) {
            if (shurikenGroupP1L.getChildren()[k].x <= 0) {
                shurikenGroupP1L.getChildren()[k].destroy();
            }
        }

        for (let j = 0; j < shurikenGroupP2R.getChildren().length; j++) {
            if (shurikenGroupP2R.getChildren()[j].x >= 1280) {
                shurikenGroupP2R.getChildren()[j].destroy();
            }
        }

        for (let l = 0; l < shurikenGroupP2L.getChildren().length; l++) {
            if (shurikenGroupP2L.getChildren()[l].x <= 0) {
                shurikenGroupP2L.getChildren()[l].destroy();
            }
        }

    }
}

export default GameScene;