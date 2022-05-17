$(document).ready(function () {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const slider = document.querySelector(".slider");

    function getNextSlide() {
        const activeSlide = document.querySelector(".slide.active");
        const activeIndex = slides.indexOf(activeSlide);
        let next, prev;
        if (activeIndex == slides.length - 1) {
          next = slides[0];
        } else {
          next = slides[activeIndex + 1];
        }
        if (activeIndex == 0) {
          prev = slides[slides.length - 1];
        } else {
          prev = slides[activeIndex - 1];
        }
        next.classList.add("active");
        activeSlide.classList.remove("active");
        activeSlide.classList.add("prev");
        prev.classList.remove("prev");
      }
    
      setInterval(getNextSlide, 5000);
    



});