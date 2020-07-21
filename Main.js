var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];
  
var sceneryTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -2
};

var background = document.getElementById("background");

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2;

setInterval( function() {
    if (backgroundMovement.playbackRate > 1) {
        backgroundMovement.playbackRate *= 0.7
    }
}, 2000);

var moveFaster = function() {
    backgroundMovement.playbackRate *= 1.2;
};

document.addEventListener("click", moveFaster);