document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById("pp__section");
    var img = document.getElementById("popup-image");
    var closeBtn = document.getElementsByClassName("pp__closed")[0];

    img.onclick = function() {
        popup.style.display = "block"; // Показываем popup при нажатии на изображение
    }

    closeBtn.onclick = function() {
        popup.style.display = "none"; // Скрываем popup при нажатии на кнопку закрытия
    }

    // Закрыть popup, если пользователь кликнет вне его содержимого
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});