let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Если индекс ниже нуля, устанавливаем его на максимальный индекс
    if (index < -2) {
        currentSlide = 2;
    }
    // Если индекс больше максимального, устанавливаем его на ноль
    else if (index >= 3) {
        currentSlide = -2;
    } else {
        currentSlide = index;
    }

    // Изменяем трансформацию слайдов
    slides.style.transform = `translateX(${-currentSlide * 20}%)`;
}

function changeSlide(change) {
    showSlide(currentSlide + change);
}