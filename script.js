let imageCount = 72;
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let viewer = document.getElementById("360viewer");
let frame = document.getElementById("frame");

function showImage(index) {
    currentIndex = (index + imageCount) % imageCount;
    frame.src = `images/frame${currentIndex + 1}.jpg`;
}

document.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        let delta = e.clientX - startX;
        if (Math.abs(delta) > 10) {
            showImage(currentIndex + (delta > 0 ? -1 : 1));
            startX = e.clientX;
        }
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Zoom feature
$(document).ready(function () {
    $('#360viewer').panzoom({
        minScale: 1,
        maxScale: 3,
        contain: 'invert'
    });
});

// Load 360 image sets
function load360(setNumber) {
    currentIndex = (setNumber - 1) * 12; // Assume 12 images per set
    showImage(currentIndex);
}