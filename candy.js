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
    "Zigs.png"
  ];

  var shakeOn = false;
  var tableImages = [];
  var gifImages = images.filter(function(x) {
    return x.match("gif");
  });

  //creates the list items with images
  for (var i = 0; i < images.length; i++) {
    if (images[i].match(".png")) {
      tableImages.push($("<li id ='" + images[i].replace(".png","") + "' class='col-xs-4 col-sm-3 col-md-2 candyImage'>").append($("<img>").attr("src", "assets/" + images[i])));
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
var patt=/\"|\'|\)/g;
  //Image click to hide main image container and bring up single image-full-size
  function clickImage() {
    $("#fullImage").css({
      "background-image": "url('" + $("img", this).attr("src") + " ')"
    }).show();
    $("#fullImage").data("currentImage", $("#fullImage").css("background-image").split('/').pop().replace(patt, ''));
    $("#imageContainer").hide();
    currentImage = $("#fullImage").data("currentImage");
  }

  //full screen image click toggles the navbars visibility
  function clickFullImage() {
    $("#navBarContainer").toggleClass("fadeOutDownBig");
  }

  $(".candyImage").click(clickImage);

  $("#fullImage").on("click", clickFullImage);

  var myShakeEvent = new Shake({
    threshold: 5, // optional shake strength threshold
    timeout: 500 // optional, determines the frequency of event generation
  }); //end of myShakeEvent

  function reset() {
    $("#fullImage").hide();
    $("#imageContainer").show();
    $("#navBarContainer").addClass("fadeInBigUp");
  } //end of reset func

  function randomImage() {

    return gifImages[Math.floor(Math.random() * gifImages.length)];

  } // end of randomImage func

  function toggleShake() {
    if (shakeOn === true) {
      window.removeEventListener('shake', shakeEventDidOccur, false);
      myShakeEvent.stop();
      shakeOn = false;
      $(this).removeClass("shakeOnImg");
    } else {
      myShakeEvent.start();
      window.addEventListener('shake', shakeEventDidOccur, true);
      shakeOn = true;
      $(this).addClass("shakeOnImg");
    }
  } //end of toggleShake function

  $("#candyBtn").click(reset);
  $("#shakeBtn").click(toggleShake);

  //function to call when shake occurs
  function shakeEventDidOccur() {

    $("#fullImage").css({
      "background-image": "url('assets/" + randomImage() + " ')"
    });
    currentImage = $("#fullImage").css("background-image").split('/').pop().replace(patt, '');
  } // End of shakeEventDidOccur function
 

  //get image  to LEFT on swipe
  $("#fullImage").on("swiperight",function(){
     var currentBg =  gifImages.indexOf(currentImage);
     if (currentBg === 0){
     currentBg = gifImages[currentBg];
   }  else {
    currentBg = gifImages[currentBg-1];
   }
    $("#fullImage").css("background-image", "url('assets/"+ currentBg +"')");
    currentImage = currentBg;
  });

  //get Image to RIGHT on swipe
  $("#fullImage").on("swipeleft",function(){
     var currentBg =  gifImages.indexOf(currentImage);
     if (currentBg === 29){
      currentBg = gifImages[currentBg];
    } 
     else {
      currentBg = gifImages[currentBg+1];
      }

    $("#fullImage").css("background-image", "url('assets/"+ currentBg +"')");
    currentImage = currentBg;
  });

  window.addEventListener("orientationchange", function(){
    console.log(screen.orientation); // e.g. portrait
});



}); //End of document ready function