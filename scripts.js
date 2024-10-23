// Function to change the main image
function changeImage(imageSrc) {
    const mainImg = document.getElementById('mainImg');
    mainImg.style.opacity = 0; // Затухающая анимация

    // Задержка перед изменением изображения
    setTimeout(() => {
        mainImg.src = imageSrc;
        mainImg.style.opacity = 1; // Появление нового изображения
    }, 200); // Задержка затухания
}

// Function to change the thumbnail image
function changeThumbnail(thumbnailSrc) {
    const thumbnail = document.querySelector('.preview.selected img');
    thumbnail.src = thumbnailSrc;
}

// Function to change the color of the circle
function changeColor(selectedColor) {
    const circles = document.querySelectorAll('.colors-list li');

    circles.forEach(circle => {
        circle.classList.remove('selected');
    });

    selectedColor.classList.add('selected');

    // Images for each color
    const colorImages = {
        'blue': {
            main: './assets/image/main-cup-1/main-cup-1-blue.png',
            thumbnail: './assets/image/miniature-cup-1/cup-miniature-1-blue.png'
        },
        'green': {
            main: './assets/image/main-cup-1/main-cup-1-green.png',
            thumbnail: './assets/image/miniature-cup-1/cup-miniature-1-green.png'
        },
        'red': {
            main: './assets/image/main-cup-1/main-cup-1-red.png',
            thumbnail: './assets/image/miniature-cup-1/cup-miniature-1-red.png'
        },
        'black': {
            main: './assets/image/main-cup-1/main-cup-1-black.png',
            thumbnail: './assets/image/miniature-cup-1/cup-miniature-1-black.png'
        },
        'yellow': {
            main: './assets/image/main-cup-1/main-cup-1-yellow.png',
            thumbnail: './assets/image/miniature-cup-1/cup-miniature-1-yellow.png'
        },
    };

    const colorClass = selectedColor.querySelector('.circle').classList[1]; // Get the color class
    const newImageSrc = colorImages[colorClass]?.main;
    const newThumbnailSrc = colorImages[colorClass]?.thumbnail;

    if (newImageSrc) {
        changeImage(newImageSrc); // Change the main image
    }
    
    if (newThumbnailSrc) {
        changeThumbnail(newThumbnailSrc); // Change the thumbnail image
    }
}

// Event handlers for each circle
document.querySelectorAll('.colors-list li').forEach(circle => {
    circle.addEventListener('click', function() {
        changeColor(this); // Passing the selected circle to the function
    });
});