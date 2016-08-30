$(document).ready(function() {


	var images = ["Alcohol.gif",
"Alcohol.png",
"AlienDubstep.gif",
"AlienDubstep.png",
"AmericanFlag.gif",
"AmericanFlag.png",
"Arrows.gif",
"Arrows.png",
"Boba.gif",
"Boba.png",
"Candy.gif",
"Candy.png",
"CandyLighter.gif",
"CandyLighter.png",
"ColoredChecker.gif",
"ColoredChecker.png",
"ColoredDiamond.gif",
"ColoredDiamond.png",
"DiamondSquare.gif",
"DiamondSquare.png",
"Donut.gif",
"Donut.png",
"Firework.gif",
"Firework.png",
"Hal.gif",
"Hal.png",
"JapaneseFlag.gif",
"JapaneseFlag.png",
"LightningBlossom.gif",
"LightningBlossom.png",
"MigWeird.gif",
"MigWeird.png",
"OldSchool.gif",
"OldSchool.png",
"Pigeon.gif",
"Pigeon.png",
"PizzaNom.gif",
"PizzaNom.png",
"RaveCandy.gif",
"RaveCandy.png",
"RaveCavities.gif",
"RaveCavities.png",
"RaveFace.gif",
"RaveFace.png",
"RedGreenBlue.gif",
"RedGreenBlue.png",
"ShakeMe.gif",
"ShakeMe.png",
"Sometimes.gif",
"Sometimes.png",
"Star.gif",
"Star.png",
"Strobe.gif",
"Strobe.png",
"StrobeLed.gif",
"StrobeLed.png",
"WallZag.gif",
"WallZag.png",
"Zigs.gif",
"Zigs.png"];
var tableImages = [];

	//creates the list items with images
	for (var i = 0; i < images.length; i++ ) {
		if (images[i].match(".png")) {
			tableImages.push($("<li class='col-xs-4 col-sm-3 col-md-2 candyImage'>").append($("<img>").attr("src", "assets/" + images[i])));
		}
	}

	//adds the entire table of images to the imageContainer
	$("#imageContainer").append(tableImages);

 //toggles between png and gif images
function toggleCandyImage() {
	if ($(this).attr("src").match(".png")) {
		$(this).attr("src", $(this).attr("src").replace(".png", ".gif"));
	} else {
		$(this).attr("src", $(this).attr("src").replace(".gif", ".png"));
	}	
}
	//changes to gif image on hover
	$(".candyImage img").hover(toggleCandyImage);

	//Image click to hide main image container and bring up single image-full-size
	function clickImage() {
	
	}

});	

