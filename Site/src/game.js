//*Variable Global
var game;
window.onload =init()
function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var game = new Phaser.Game(width, height, Phaser.CANVAS, "canvas", {preload: preload, create: create, update: update});

	//PUBLIC SPRITE
	var gearIcon;
	function preload()
	{ 
		game.load.image("gearIcon","assets/img/gear.png")//creation de l'image avec l'id "gearIcon" et son url.
		
		console.log("preload OK");
	}
	function create()
	{
		game.stage.backgroundColor = "#4488AA"; // change la couleur de fond du canvas
		gearIcon= game.add.sprite(window.innerWidth/2,window.innerHeight/2,"gearIcon");//ajout de l'image avec l'id gearIcon
		gearIcon.anchor.x=0.5;
		gearIcon.anchor.y=0.5;
		adjustImageToScreenSize(gearIcon,0.5,true,0.25);
		//gearIcon.scale.x = 1 +(window.innerWidth / 50 *100); 
		console.log(gearIcon.width * (window.innerWidth/2));
	}
	function update()
	{
		gearIcon.angle+= game.time.elapsedMS /10; 
	}
}
//Reajustement de l'image en fonction de la taille de l'ecran ----------
function adjustImageToScreenSize(image , screenRatio , isCircle , screenRatioY) // (image etant l'instance de l'objet Sprite par exemple gearIcon, screenRatio et le reajustement entre 0 et 1, isCircle est un boléan utiliser si la hauteur de l'image et egale a la largeur si ca n'est pas le cas il faudra utiliser le parametre screenRatioY pour reajuste la taille de l'image en hauteur)
{
	if(isCircle)
	{
		if(window.innerWidth<window.innerHeight)
		{
			image.width = window.innerWidth*screenRatio ;
			image.height =image.width;
		}
		else
		{
			image.height = window.innerHeight*screenRatio ;
			image.width =image.height;
		}
	}
	else
	{
		image.width = window.innerWidth*screenRatio;
		image.height =window.innerHeight*screenRatioY;
	}
}

