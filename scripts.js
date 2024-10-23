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

    const colorClass = selectedColor.classList[1]; 
    const newImageSrc = colorImages[colorClass];

    changeImage(newImageSrc);
}

// Event handlers for each circle
const circles = document.querySelectorAll('.colors-list li');
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        changeColor(this); // Passing the selected circle to the function
    });
});
