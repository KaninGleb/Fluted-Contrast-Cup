function changeImage(imageSrc) {
    document.getElementById('main-img').src = imageSrc;
    const previews = document.querySelectorAll('.preview');
    previews.forEach(preview => preview.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}