var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{

}

function create ()

{
    graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xeff542 } });
    // bulb
    this.add.circle(500, 300, 40, 0xeff542);
    this.add.line(0,0,100,100,200,200,0xff0000); 

}