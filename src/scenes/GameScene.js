import Phaser from "phaser";
import { player1Selected } from "./MainMenu"

let player1;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('ninja', 'src/image/ninjaR.png');
        this.load.image('nong', 'src/image/Player1.png');
    }

    create() {
        if (player1Selected == "ninja") {
            player1 = this.physics.add.image(200, 300, 'ninja');
            //console.log(player1Selected);
        } else if (player1Selected == "nong") {
            player1 = this.physics.add.image(200, 300, 'nong');
            //console.log(player1Selected);
        }
        player1.setVelocityX(100);

    }

    update(delta, time) {

    }
}
export default GameScene;