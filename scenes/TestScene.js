import Phaser from 'phaser';
import sky from '/assets/sky.png';


export default class TestScene extends Phaser.Scene {
	constructor(){
		super({key: "bootScene"});
	}
	
	preload(){
		this.load.image('sky', sky);
	}
	
	create(){
		this.add.image(0, 0, 'sky');
        this.txt = this.add.text(10, 10, "Txt1");

	}

	update() {
		
    }

}
