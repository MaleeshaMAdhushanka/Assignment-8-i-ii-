console.log("Script .js loading.........................");


const lights = document.querySelectorAll('.light');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const themeAudio = document.getElementById('themeAudio');

let isRunning = false;
let currentLight = 0;
let direction = 1;
let animationId;

function animateLights() {
// Remove active class from all lights
lights.forEach(light => light.classList.remove('active'));

// Add active class to current light and adjacent lights for fade effect
lights[currentLight].classList.add('active');

// Move to next position
currentLight += direction;

// Change direction when reaching ends
if (currentLight >= lights.length - 1) {
    direction = -1;
    currentLight = lights.length - 1;
} else if (currentLight <= 0) {
    direction = 1;
    currentLight = 0;
}

if (isRunning) {
    setTimeout(() => {
        animationId = requestAnimationFrame(animateLights);
    }, 100); // Control speed of animation
}
}

function startAnimation() {
if (!isRunning) {
    isRunning = true;
    themeAudio.play();
    animateLights();
}
}

function stopAnimation() {
isRunning = false;
cancelAnimationFrame(animationId);
themeAudio.pause();
themeAudio.currentTime = 0;
}

startBtn.addEventListener('click', startAnimation);
stopBtn.addEventListener('click', stopAnimation);