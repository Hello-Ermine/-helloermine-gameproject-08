import Phaser from "phaser";

let bg;

let player1;
let keyW;
let keyA;
let keyD;
let keySpace;
let p1Direction = 'right';

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {

        this.load.image('bg', 'src/image/BG/bg.jpg'); //bg

        this.load.spritesheet('player1Left', 'src/image/Player/ninjaL.png', {
            frameWidth: 184.5, frameHeight: 224
        });
        this.load.spritesheet('player1Right', 'src/image/Player/ninjaR.png', {
            frameWidth: 184.5, frameHeight: 225
        });

        this.load.spritesheet('player2Left', 'src/image/Player/ninjaL.png', {
            frameWidth: 184.5, frameHeight: 224
        });
        this.load.spritesheet('player2Right', 'src/image/Player/ninjaR.png', {
            frameWidth: 184.5, frameHeight: 225
        });
    }

    create() {
        bg = this.add.image(620, 300, 'bg');
        bg.setScale(0.8);

        player1 = this.physics.add.sprite(300, 600, 'player1Right')
        .setScale(0.9)
        .setSize(100,180)
        .setOffset(20,20);

        player1.setCollideWorldBounds(true) 

        this.anims.create({
            key: 'player1Left',
            frames: this.anims.generateFrameNumbers('player1Left', {
                start: 2,
                end: 5
            }),
            duration: 600,
            repeat: -1
        });

        this.anims.create({
            key: 'player1Right',
            frames: this.anims.generateFrameNumbers('player1Right', {
                start: 0,
                end: 3
            }),
            duration: 600,
            repeat: -1
        });

        this.anims.create({
            key: 'player1ShootRight',
            frames: this.anims.generateFrameNumbers('player1Right', {
                start: 5,
                end: 5
            }),
            duration: 600,
            repeat: -1
        });

        this.anims.create({
            key: 'player1ShootLeft',
            frames: this.anims.generateFrameNumbers('player1Left', {
                start: 0,
                end: 0
            }),
            duration: 600,
            repeat: -1
        });

        this.anims.create({
            key: 'player1StopRight',
            frames: this.anims.generateFrameNumbers('player1Right', {
                start: 4,
                end: 4
            }),
            duration: 600,
            repeat: -1
        });

        this.anims.create({
            key: 'player1StopLeft',
            frames: this.anims.generateFrameNumbers('player1Left', {
                start: 1,
                end: 1
            }),
            duration: 600,
            repeat: -1
        });

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {
        //player1.anims.play('player1Left', true);
        // if(keyW.isDown){
        //     player1.setVelocityY(-500);
        // }
        // else {
        //     player1.setVelocityY(0);
        // }
        if(keyA.isDown){
            player1.setVelocityX(-500);
            player1.anims.play('player1Left', true);
            p1Direction = 'left';
            player1.setSize(100,180);
            player1.setOffset(60,20);
        }else if(keyD.isDown){
            player1.setVelocityX(500);
            player1.anims.play('player1Right', true);
            p1Direction = 'right';
            player1.setSize(100,180);
            player1.setOffset(20,20);
        }else{
            player1.setVelocityX(0);
                if(p1Direction==='right') {
                    player1.anims.play('player1StopRight', true);
             }
                else {
                    player1.anims.play('player1StopLeft', true);
             }
        }

        if(keySpace.isDown){
            if(p1Direction==='right'){
                player1.anims.play('player1ShootRight', true);
            }
            else {
                player1.anims.play('player1ShootLeft', true);
            }
        }
            
    }
}
export default GameScene;
