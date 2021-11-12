import Phaser from "phaser";

let bg;

let player1;

let player2;

let timeShuriken = 0;
let delayShuriken = 2000;

let shuriken;
let shurikenGroupP1;
let shurikenGroupP2;

let shurikenGroupP1L;
let shurikenGroupP1R;

let shurikenGroupP2L;
let shurikenGroupP2R;

let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;

let cursor;
let keyM;

let directionP1 = 'right';
let directionP2 = 'left';

let hitP1;
let hitP2;

let player1HealthBar = 10;
let player2HealthBar = 10;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/BG/bg.jpg');

        this.load.spritesheet('player1R', 'src/image/player/ninjaR.png', { frameWidth: 184.5, frameHeight: 224 });

        this.load.spritesheet('player1L', 'src/image/player/ninjaL.png', { frameWidth: 184.5, frameHeight: 224 });

        this.load.spritesheet('player2R', 'src/image/player/ninjaR.png', { frameWidth: 184.5, frameHeight: 224 });

        this.load.spritesheet('player2L', 'src/image/player/ninjaL.png', { frameWidth: 184.5, frameHeight: 224 });

        this.load.spritesheet('shuriken', 'src/image/Bullet/shuriken.png', { frameWidth: 311.5, frameHeight: 332 });

        this.load.spritesheet('ShootingR', 'src/image/Player/ShootR.png', {
            frameWidth: 250,
            frameHeight: 333
        });
    }

    create() {
        bg = this.add.image(-30, -100, 'bg');
        bg.setOrigin(0, 0);
        bg.setScale(0.68);

        player1 = this.physics.add.sprite(425, 800, 'player1L').setScale(0.8);
        this.anims.create({
            key: 'player1AniLeft',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 1,
                end: 5
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniRight',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 1,
                end: 5
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniShootR',
            frames: this.anims.generateFrameNumbers('ShootingR', {
                start: 0,
                end: 2
            }),
            duration: 2000,
            framerate: 1,
            repeat: 10,
            callbackScope: this,
        })

        this.anims.create({
            key: 'player1AniShootL',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 0,
                end: 0
            }),
            duration: 100,
            delay: 1000,
            repeat: -1
        })


        this.anims.create({
            key: 'player1AniUp',
            frames: this.anims.generateFrameNumbers('player1R', {
                start: 4,
                end: 4
            }),
            duration: 500,
            repeat: -1
        })

        //-------------------------------------

        player2 = this.physics.add.sprite(800, 800, 'player2L').setScale(0.5);
        this.anims.create({
            key: 'player2AniLeft',
            frames: this.anims.generateFrameNumbers('player2L', {
                start: 0,
                end: 4
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniRight',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 0,
                end: 4
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniDown',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 1,
                end: 1
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniUp',
            frames: this.anims.generateFrameNumbers('player2R', {
                start: 4,
                end: 4
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'shurikenAni',
            frames: this.anims.generateFrameNumbers('shuriken', {
                start: 0,
                end: 3
            }),
            duration: 1000,
            repeat: -1
        })

        shurikenGroupP1L = this.physics.add.group();
        shurikenGroupP1R = this.physics.add.group();

        shurikenGroupP2L = this.physics.add.group();
        shurikenGroupP2R = this.physics.add.group();

        shurikenGroupP1 = this.physics.add.group();
        shurikenGroupP2 = this.physics.add.group();

        player1.setCollideWorldBounds(true)
        player2.setCollideWorldBounds(true)

        cursor = this.input.keyboard.createCursorKeys();
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



    }

    update(delta, time) {
        this.physics.add.overlap(shurikenGroupP1R, player2, (S, R) => {
            R.destroy();
            player2HealthBar--;
            if (player2HealthBar <= 0) {
                console.log('Player1 Win');
            }
            console.log('Health Player2 : ' + player2HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP1L, player2, (S, R) => {
            R.destroy();
            player2HealthBar--;
            if (player2HealthBar <= 0) {
                console.log('Player1 Win');
            }
            console.log('Health Player2 : ' + player2HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP2R, player1, (S, R) => {
            R.destroy();
            player1HealthBar--;
            if (player1HealthBar <= 0) {
                console.log('Player2 Win');
            }
            console.log('Health Player1 : ' + player1HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP2L, player1, (S, R) => {
            R.destroy();
            player1HealthBar--;
            if (player1HealthBar <= 0) {
                console.log('Player2 Win');
            }
            console.log('Health Player1 : ' + player1HealthBar);
        })

        this.physics.add.overlap(shurikenGroupP1, shurikenGroupP2, (S, R) => {
            R.destroy();
            S.destroy();
        })

        //player1
        if (keyW.isDown) {
            player1.setVelocityY(-500);
            player1.anims.play('player1AniUp', true);
        } else if (keyS.isDown) {
            player1.setVelocityY(500);
            player1.anims.play('player1AniDown', true);
        } else {
            player1.setVelocityY(0);
        }
        if (keyA.isDown) {
            player1.setVelocityX(-500);
            player1.anims.play('player1AniLeft', true);
            // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            //     bulletL = this.physics.add.image(player1.x - 50, player1.y, 'bullet')
            //     bulletL.setScale(0.1);
            //     bulletL.setVelocityX(-500);
            // }
            directionP1 = 'left'

        } else if (keyD.isDown) {
            player1.setVelocityX(500);
            player1.anims.play('player1AniRight', true);
            // if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            //     bulletR = this.physics.add.image(player1.x + 50, player1.y, 'bulletR')
            //     bulletR.setScale(0.1);
            //     bulletR.setVelocityX(500);
            // }
            directionP1 = 'right'
        } else {
            player1.setVelocityX(0);
        }

        if (keySpace.isDown && delta >= (timeShuriken + delayShuriken)) {
            if (directionP1 === 'left') {
                player1.anims.play('player1AniShootL', true);
                // bulletL = this.physics.add.image(player1.x - 100, player1.y, 'bullet')
                // .setScale(0.1);
                // bulletL.setVelocityX(-800);
            } else {
                player1.anims.play('player1AniShootR', true);
                this.time.addEvent({
                    delay: 2000,
                    callback: function() {
                        player1.anims.play('player1AniUp', true);
                    },
                    callbackScope: this,
                    loop: false,
                });
                // bulletR = this.physics.add.image(player1.x + 100, player1.y, 'bulletR')
                // .setScale(0.1);
                // bulletR.setVelocityX(800);
            }
            timeShuriken = delta;
        }

        // if (Phaser.Input.Keyboard.JustDown(keySpace) && delta >= (timeShuriken + delayShuriken)) {
        //     if (directionP1 === 'left') {
        //         shuriken = this.physics.add.sprite(player1.x, player1.y, 'shuriken');
        //         shuriken.setSize(220, 220);
        //         shuriken.anims.play('shurikenAni', true);
        //         shuriken.setScale(0.2);
        //         shurikenGroupP1L.add(shuriken);
        //         shurikenGroupP1L.setVelocityX(-400);
        //         // bulletL = this.physics.add.image(player1.x - 100, player1.y, 'bullet')
        //         // .setScale(0.1);
        //         // bulletL.setVelocityX(-800);
        //     } else {
        //         shuriken = this.physics.add.sprite(player1.x, player1.y, 'shuriken');
        //         shuriken.setSize(220, 220);
        //         shuriken.anims.play('shurikenAni', true);
        //         shuriken.setScale(0.2);
        //         shurikenGroupP1R.add(shuriken);
        //         shurikenGroupP1R.setVelocityX(400);
        //         // bulletR = this.physics.add.image(player1.x + 100, player1.y, 'bulletR')
        //         // .setScale(0.1);
        //         // bulletR.setVelocityX(800);
        //     }
        //     timeShuriken = delta;
        // }

        //player2
        if (cursor.up.isDown) {
            player2.setVelocityY(-500);
            player2.anims.play('player2AniUp', true);
        } else if (cursor.down.isDown) {
            player2.setVelocityY(500);
            player2.anims.play('player2AniDown', true);
        } else {
            player2.setVelocityY(0);
        }
        if (cursor.left.isDown) {
            player2.setVelocityX(-500);
            player2.anims.play('player2AniLeft', true);
            directionP2 = 'left';
        } else if (cursor.right.isDown) {
            player2.setVelocityX(500);
            player2.anims.play('player2AniRight', true);
            directionP2 = 'right';
        } else {
            player2.setVelocityX(0);
            player2.anims.play('player2AniUp', true);
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            if (directionP2 === 'left') {
                shuriken = this.physics.add.sprite(player2.x, player2.y, 'shuriken');
                shuriken.setSize(220, 220);
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shurikenGroupP2L.add(shuriken);
                shurikenGroupP2L.setVelocityX(-400);
            } else {
                shuriken = this.physics.add.sprite(player2.x, player2.y, 'shuriken');
                shuriken.setSize(220, 220);
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shurikenGroupP2R.add(shuriken);
                shurikenGroupP2R.setVelocityX(400);
            }
        }
        for (let i = 0; i < shurikenGroupP1R.getChildren().length; i++) {
            if (shurikenGroupP1R.getChildren()[i].x < 0) {
                shurikenGroupP1R.getChildren()[i].destroy();
            } else if (shurikenGroupP1R.getChildren()[i].x > 1280) {
                shurikenGroupP1R.getChildren()[i].destroy();
            }
        }

        for (let j = 0; j < shurikenGroupP1L.getChildren().length; j++) {
            if (shurikenGroupP1L.getChildren()[j].x < 0) {
                shurikenGroupP1L.getChildren()[j].destroy();
            } else if (shurikenGroupP1L.getChildren()[j].x > 1280) {
                shurikenGroupP1L.getChildren()[j].destroy();
            }
        }

        for (let k = 0; k < shurikenGroupP2R.getChildren().length; k++) {
            if (shurikenGroupP2R.getChildren()[k].x < 0) {
                shurikenGroupP2R.getChildren()[k].destroy();
            } else if (shurikenGroupP2R.getChildren()[k].x > 1280) {
                shurikenGroupP2R.getChildren()[k].destroy();
            }
        }

        for (let l = 0; l < shurikenGroupP2L.getChildren().length; l++) {
            if (shurikenGroupP2L.getChildren()[l].x < 0) {
                shurikenGroupP2L.getChildren()[l].destroy();
            } else if (shurikenGroupP2L.getChildren()[l].x > 1280) {
                shurikenGroupP2L.getChildren()[l].destroy();
            }
        }

    }
}
export default GameScene;