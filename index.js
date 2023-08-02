

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button_InnerHtml = this.innerHTML;
    makeSound(button_InnerHtml);
    addAnimation(button_InnerHtml);
  });
  
  document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
  });
}


function makeSound(key){

  switch(key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default :
      alert(button_InnerHtml)

  }

}


function addAnimation(pressed_button){
  var activeButton = document.querySelector("."+pressed_button);
  activeButton.classList.add("pressed"); 
  setTimeout(function(){activeButton.classList.remove("pressed")},100);
  
  

}