import Phaser from "phaser";

let bg;

let player1;

let player2;

let bulletL;
let bulletR;

let shuriken;

let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;

let cursor;
let keyM;

let directionP1 = 'right';
let directionP2 = 'left';

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/BG/bg.jpg');

        this.load.spritesheet('player1', 'src/image/player/player1.png',
            { frameWidth: 123.5, frameHeight: 505 });

        this.load.spritesheet('player2', 'src/image/player/player1.png',
            { frameWidth: 123.5, frameHeight: 505 });

        this.load.spritesheet('shuriken', 'src/image/Bullet/shuriken.png',
        { frameWidth: 138.25, frameHeight: 137 });

        this.load.image('bullet', 'src/image/Bullet/bullet.png');
        this.load.image('bulletR', 'src/image/Bullet/bulletR.png');
    }

    create() {
        bg = this.add.image(-30, -100, 'bg');
        bg.setOrigin(0,0);
        bg.setScale(0.68);

        player1 = this.physics.add.sprite(425, 800, 'player1').setScale(0.5);
        this.anims.create({
            key: 'player1AniLeft',
            frames: this.anims.generateFrameNumbers('player1', {
                start: 0,
                end: 0
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniRight',
            frames: this.anims.generateFrameNumbers('player1', {
                start: 2,
                end: 2
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniDown',
            frames: this.anims.generateFrameNumbers('player1', {
                start: 1,
                end: 1
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player1AniUp',
            frames: this.anims.generateFrameNumbers('player1', {
                start: 3,
                end: 3
            }),
            duration: 500,
            repeat: -1
        })

        //-------------------------------------

        player2 = this.physics.add.sprite(800, 800, 'player2').setScale(0.5);
        this.anims.create({
            key: 'player2AniLeft',
            frames: this.anims.generateFrameNumbers('player2', {
                start: 0,
                end: 0
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniRight',
            frames: this.anims.generateFrameNumbers('player2', {
                start: 2,
                end: 2
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniDown',
            frames: this.anims.generateFrameNumbers('player2', {
                start: 1,
                end: 1
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'player2AniUp',
            frames: this.anims.generateFrameNumbers('player2', {
                start: 3,
                end: 3
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
            duration: 500,
            repeat: -1
        })

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

        if(Phaser.Input.Keyboard.JustDown(keySpace)) {
            if(directionP1==='left') {
                shuriken = this.physics.add.sprite(player1.x, player1.y, 'shuriken');
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shuriken.setVelocityX(-600);
                // bulletL = this.physics.add.image(player1.x - 100, player1.y, 'bullet')
                // .setScale(0.1);
                // bulletL.setVelocityX(-800);
            }
            else {
                shuriken = this.physics.add.sprite(player1.x, player1.y, 'shuriken');
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shuriken.setVelocityX(600);
                // bulletR = this.physics.add.image(player1.x + 100, player1.y, 'bulletR')
                // .setScale(0.1);
                // bulletR.setVelocityX(800);
            }
        }

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
        }
        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            if(directionP2==='left') {
                shuriken = this.physics.add.sprite(player2.x, player2.y, 'shuriken');
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shuriken.setVelocityX(-600);
            }
            else {
                shuriken = this.physics.add.sprite(player2.x, player2.y, 'shuriken');
                shuriken.anims.play('shurikenAni', true);
                shuriken.setScale(0.2);
                shuriken.setVelocityX(600);
            }
        }
    }
}
export default GameScene;
