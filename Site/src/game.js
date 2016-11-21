//*Variable Global
var game;
window.onload =init()
function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var game = new Phaser.Game(width, height, Phaser.CANVAS, "canvas", {preload: preload, create: create, update: update});

	function preload()
	{ 
		game.load.image("gearIcon","assets/img/gear.png")//creation de l'image avec l'id "gearIcon" et son url.
		
		console.log("preload OK");
	}
	function create()
	{
		game.stage.backgroundColor = "#4488AA"; // change la couleur de fond du canvas
		var gearIcon= game.add.sprite(window.innerWidth/2,window.innerHeight/2,"gearIcon");//ajout de l'image avec l'id gearIcon
		gearIcon.anchor.x=0.5;
		gearIcon.anchor.y=0.5;
		if(window.innerWidth<window.innerHeight)
		{
			gearIcon.width = window.innerWidth*0.5 ;
			gearIcon.height =gearIcon.width;
		}
		else
		{
			gearIcon.height = window.innerHeight*0.5 ;
			gearIcon.width =gearIcon.height;
		}
		
		//gearIcon.scale.x = 1 +(window.innerWidth / 50 *100); 
		console.log(gearIcon.width * (window.innerWidth/2));
	}
	function update()
	{

	}

}

