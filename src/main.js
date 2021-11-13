import 'phaser';
import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import Select from './scenes/Select';


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
        //MainMenu,
        Select
    ],

};

const game = new Phaser.Game(config);