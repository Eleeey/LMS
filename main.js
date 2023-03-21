console.log('Hello World!');
// Get the slider element
const slider = document.querySelector('.slider');

// Get the slides
const slides = slider.querySelectorAll('.slide');

// Set the initial slide index
let currentSlide = 0;

// Set the slide width
const slideWidth = slides[currentSlide].clientWidth;

// Set the slides container width
const slidesContainerWidth = slideWidth += slides.length;

// Set the slides container styles
slider.querySelector('.slides').style.width = `${slidesContainerWidth}px`;

// Add event listener for the next button
slider.querySelector('.next').addEventListener('click', () => {
  // Move to the next slide
  currentSlide++;

  // If we've reached the end, go back to the beginning
  if (currentSlide==slides.length) {
   currentSlide==0;
}})