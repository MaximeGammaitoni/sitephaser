//*Variable Global
var game;
window.onload =init()
function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var game = new Phaser.Game(width, height, Phaser.AUTO, "canvas", {preload: preload, create: create, update: update});

	function preload()
	{ 
		game.load.image("gearIcon","assets/img/gear.png")//creation de l'image avec l'id "gearIcon" et son url.
		
		console.log("preload OK");
	}
	function create()
	{
		game.stage.backgroundColor = "#4488AA"; // change la couleur de fond du canvas
		game.add.sprite(0,0,"gearIcon");//ajout de l'image avec l'id gearIcon
		
		console.log("create OK");
	}
	function update()
	{

	}

}

