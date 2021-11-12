import Phaser from "phaser";

let player1;
let player2;

let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;

let timeShuriken = 0;
let delayShuriken = 2000;

class fixSpritesheet extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'fixSpritesheet'
        });
    }

    preload() {
        this.load.spritesheet('player1R', 'src/image/PlayerR', {
            frameWidth: 152.3,
            frameHeight: 182
        });

        this.load.spritesheet('player1L', 'src/image/PlayerL', {
            frameWidth: 152.3,
            frameHeight: 182
        });
    }

    create() {
        player1 = this.physics.add.sprite(425, 800, 'player1L').setScale(0.8);
        this.anims.create({
            key: 'player1AniLeft',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 5,
                end: 8
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniRight',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 0,
                end: 3
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniStop',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 4,
                end: 4
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniShootRight',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 5,
                end: 8
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniShootLeft',
            frames: this.anims.generateFrameNumbers('player1L', {
                start: 0,
                end: 3
            }),
            duration: 500,
            repeat: -1
        })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {
        if (keyW.isDown) {
            player1.setVelocityY(-500);
            player1.anims.play('player1AniStop', true);
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
    }
}
export default fixSpritesheet;