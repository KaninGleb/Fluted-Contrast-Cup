// Function to change the image
function changeImage(imageSrc) {
    document.getElementById('mainImg').src = imageSrc;
}

// Function to change the color of the circle
function changeColor(selectedColor) {
    const circles = document.querySelectorAll('.colors-list li');

    circles.forEach(circle => {
        circle.classList.remove('selected');
    });

    selectedColor.classList.add('selected');

    // Изображения для каждого цвета
    const colorImages = {
        'blue': './assets/image/main-cup-1/main-cup-1-blue.png',
        'green': './assets/image/main-cup-1/main-cup-1-green.png',
        'red': './assets/image/main-cup-1/main-cup-1-red.png',
        'black': './assets/image/main-cup-1/main-cup-1-black.png',
        'yellow': './assets/image/main-cup-1/main-cup-1-yellow.png',
    };

    const colorClass = selectedColor.querySelector('.circle').classList[1]; // Получаем класс цвета
    const newImageSrc = colorImages[colorClass];
    if (newImageSrc) {
        changeImage(newImageSrc); // Меняем изображение
    }
}

// Event handlers for each circle
document.querySelectorAll('.colors-list li').forEach(circle => {
    circle.addEventListener('click', function() {
        changeColor(this); // Passing the selected circle to the function
    });
});