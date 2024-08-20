var imageno = 1; // Inicia en la primera imagen
displayimg(imageno); // Muestra la primera imagen cuando se carga la página

function nextimg(n) {
    displayimg(imageno += n);
}

function currentSlide(n) {
    displayimg(imageno = n);
}

function displayimg(n) {
    var i;
    var images = document.getElementsByClassName("card");

    if (n > images.length) {
        imageno = 1;
    }

    if (n < 1) {
        imageno = images.length;
    }

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }

    // Verifica si la imagen existe antes de intentar acceder a su classList
    if (images[imageno - 1]) {
        images[imageno - 1].classList.add("active"); // Añade la clase 'active' a la imagen visible
    }
}

