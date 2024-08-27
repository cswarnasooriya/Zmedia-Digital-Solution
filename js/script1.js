let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Increment slide index
    slideIndex++;

    // Reset to first slide if index exceeds the total slides
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}
