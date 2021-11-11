import Phaser from "phaser";

let bg;

let player1;
let keyW;
let keyA;
let keyS;
let keyD;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {

        this.load.image('bg', 'src/image/BG/bg.jpg'); //bg

        this.load.spritesheet('player1Left', 'src/image/Player/ninjaL.png', {
            frameWidth: 184.5, frameHeight: 225
        });
        this.load.spritesheet('player1Right', 'src/image/Player/ninjaR.png', {
            frameWidth: 184.5, frameHeight: 225
        });

        this.load.spritesheet('player2Left', 'src/image/Player/ninjaL.png', {
            frameWidth: 184.5, frameHeight: 225
        });
        this.load.spritesheet('player2Right', 'src/image/Player/ninjaR.png', {
            frameWidth: 184.5, frameHeight: 225
        });
    }

    create() {
        bg = this.add.image(620, 300, 'bg');
        bg.setScale(0.8);

        player1 = this.physics.add.sprite(300, 600, 'player1Right').setScale(0.9);

        this.anims.create({
            key: 'player1LeftAni',
            frames: this.anims.generateFrameNumbers('player1Left', {
                start: 0,
                end: 3
            }),
            duration: 600,
            repeat: -1
        })

        this.anims.create({
            key: 'player1RightAni',
            frames: this.anims.generateFrameNumbers('player1Right', {
                start: 0,
                end: 3
            }),
            duration: 600,
            repeat: -1
        })

        this.anims.create({
            key: 'player1StopRightAni',
            frames: this.anims.generateFrameNumbers('player1Right', {
                start: 4,
                end: 4
            }),
            duration: 600,
            repeat: -1
        })

        this.anims.create({
            key: 'player1StopLeftAni',
            frames: this.anims.generateFrameNumbers('player1Left', {
                start: 1,
                end: 1
            }),
            duration: 600,
            repeat: -1
        })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta, time) {
        //player1.anims.play('player1LeftAni', true);
        if(keyW.isDown){
            player1.setVelocityY(-500);
            player1.anims.play('player1StopLeftAni', true);
        }
        else {
            player1.setVelocityY(0);
            player1.anims.play('player1StopLeftAni', true);
        }
        if(keyA.isDown){
            player1.setVelocityX(-500);
            player1.anims.play('player1LeftAni', true);
        }else if(keyD.isDown){
            player1.setVelocityX(500);
            player1.anims.play('player1RightAni', true);
        }else{
            player1.setVelocityX(0);
            player1.anims.play('player1StopRightAni', true);
        }
    }
}
export default GameScene;
