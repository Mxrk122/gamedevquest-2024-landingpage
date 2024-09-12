function nextimg(n, divid) {
    // Get the div by its ID and retrieve the current imageno from the data attribute
    var div = document.getElementById(divid);
    var imageno = parseInt(div.getAttribute("data-imageno")) || 1;

    // Increment or decrement the imageno
    displayimg(imageno + n, divid);
}

function displayimg(n, divid) {
    var div = document.getElementById(divid);
    var images = div.getElementsByClassName("card");

    // Get the total number of images
    var totalImages = images.length;

    // Adjust imageno based on bounds
    if (n > totalImages) {
        n = 1;
    } else if (n < 1) {
        n = totalImages;
    }

    // Update the imageno in the data attribute
    div.setAttribute("data-imageno", n);

    // Remove 'active' class from all images
    for (var i = 0; i < totalImages; i++) {
        images[i].classList.remove("active");
    }

    // Add 'active' class to the current image
    if (images[n - 1]) {
        images[n - 1].classList.add("active");
    }
}

