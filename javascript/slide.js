var slideIndex = 0;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(n);
}

//Thumbnail image controls

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");

    if (n) {
        resetCurrent(slideIndex);
        return;
    }

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    resetCurrent(slideIndex);

    ++slideIndex;
}

function resetCurrent(index) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = index === i ? "block" : "none";
    }

    for (var x = 0; x < dots.length; x++) {
        var dot = dots[x];

        if (index === x) {
            dot.classList.add('active');
            continue;
        }
        dot.classList.remove('active');
    }
}

setInterval(showSlides, 2000);