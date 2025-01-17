/** @type {import("../../typings/phaser")} */

class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){

        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket','./assets/rocket_shot.wav');

    }
    create(){
        this.add.text(20,20, "Rocket Patrol Menu");


        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 32;

        this.add.text(centerX, centerY-textSpacer, 'ROCKET PATROL 2:', menuConfig).setOrigin(0.5);
        menuConfig.fontSize='18px'
        this.add.text(centerX, centerY, 'Electric Boogaloo', menuConfig).setOrigin(0.5);
        menuConfig.fontSize='28px'
        this.add.text(centerX, centerY+textSpacer,'Use ← → arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY+75, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


        

        //this.scene.start("playScene");
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}