// Carousel JS 
const images = document.querySelectorAll('.background-image');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 5000);

//Navbar JS
let toggle = 'false';
function menuFunction() {
    if (toggle) {
        document.getElementById('navbar').style.color = '#52057B';
        document.getElementById('menuBtn').value = 'close';
        document.getElementById('navMenu').style.right = '0';
        toggle = false;
    } else {
        document.getElementById('menuBtn').value = 'menu';
        document.getElementById('navMenu').style.right = '-100%';
        toggle = true;
    }
}


