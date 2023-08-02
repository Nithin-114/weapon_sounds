//Detecting Button Press

var numberOfWeapons = document.querySelectorAll(".Weapon").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".Weapon")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  
  buttonAnimation(event.key);

})


function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio('sounds/granade.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/akm.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/kar98.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/m416.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/pistol.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/flare.mp3');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
