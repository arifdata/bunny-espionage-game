import TestScene from './TestScene';
import Phaser from 'phaser';

export default {
	type: Phaser.AUTO,
	roudPixels: true,
	backgroundColor: '#000000',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 480,
		height: 270,
	},
	physics: {
		default: 'arcade',
		arcade: {
			//gravity: {y: 300},
			debug: true
		}
	},
	title: "Bunny Espionage Game",
	scene: [TestScene]
};
