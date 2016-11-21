//*Variable Global
var test=0;
window.onload =init()
function init()
{
	var height=window.innerHeight;
	var width=window.innerWidth;
	var game = new Phaser.Game(width, height, Phaser.AUTO, "canvas", {preload: preload, create: create, update: update});

}
function preload()
{
	console.log("preload OK");
}
function create()
{
	console.log("create OK");
}
function update()
{

}