// script.js

let noClickCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    displayImage();
});

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        noClickCount++;
        displayNoReaction();
        if (noClickCount === 1) {
            document.getElementById('no-button').innerText = 'You sure?';
        } else if (noClickCount >= 2 && noClickCount < 10) {
            moveNoButton();
        } else if (noClickCount >= 10) {
            document.getElementById('no-button').style.display = 'none';
            enlargeYesButton();
        }
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function moveNoButton() {
    let noButton = document.getElementById('no-button');
    let maxX = window.innerWidth - noButton.clientWidth;
    let maxY = window.innerHeight - noButton.clientHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function enlargeYesButton() {
    let yesButton = document.getElementById('yes-button');
    yesButton.style.fontSize = '200px';
}

function displayImage() {
    var imageContainer = document.getElementById('image-container');
    var image = new Image();
    image.src = 'IMG.9475.jpg'; 
    image.alt = 'Main Image';
    image.onload = function() {
        imageContainer.appendChild(image);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

function displayNoReaction() {
    var imageContainer = document.getElementById('image-container');
    var noImage = new Image();
    noImage.src = 'IMG_7609.jpg';
    noImage.alt = 'No Reaction';
    imageContainer.innerHTML = '';
    noImage.onload = function() {
        imageContainer.appendChild(noImage);
    };
}
