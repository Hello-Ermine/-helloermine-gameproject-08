import 'phaser';
import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import Select from './scenes/Select';
import GameScene from './scenes/GameScene';
import Player1Win from './scenes/Player1Win';
import Player2Win from './scenes/Player2Win';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        MainMenu,
        Select,
        GameScene,
        Player1Win,
        Player2Win
    ],

};

const game = new Phaser.Game(config);