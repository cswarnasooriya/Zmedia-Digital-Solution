let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//carousel added
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}


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