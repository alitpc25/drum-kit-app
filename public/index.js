var buttons = document.querySelectorAll(".drum")

function audioFinder(char) {
    switch (char) {
        case "w":
            return new Audio('sounds/crash.mp3');
        case "a":
            return new Audio('sounds/kick-bass.mp3');
        case "s":
            return new Audio('sounds/snare.mp3');
        case "d":
            return new Audio('sounds/tom-1.mp3');
        case "j":
            return new Audio('sounds/tom-2.mp3');
        case "k":
            return new Audio('sounds/tom-3.mp3');
        case "l":
            return new Audio('sounds/tom-4.mp3');
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonText = this.innerHTML;
        var audio = audioFinder(buttonText);
        audio.play();
        buttonAnimation(buttonText);
    })
}

document.addEventListener("keydown", function(event) {
    var audio2 = audioFinder(event.key);
    audio2.play();
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    var item = document.querySelector("."+currentKey);
    item.classList.add("pressed")
    
    setTimeout(function() {
        item.classList.remove("pressed")
    }, 100);
}

