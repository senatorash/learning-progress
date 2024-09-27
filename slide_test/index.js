const slides = document.querySelectorAll(".slide");
slides.forEach((slide, index) => {
  slide.style.transitionDelay = `${index * 1}s`;
});
