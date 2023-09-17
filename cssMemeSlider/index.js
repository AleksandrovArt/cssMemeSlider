document.addEventListener("DOMContentLoaded", function () {
  const sliderImages = document.querySelectorAll(".slider-img");
  const sliderLine = document.querySelector(".slider-line");
  const sliderDots = document.querySelectorAll(".slider-dot");
  const slides = document.getElementsByClassName("slider-containerImg");
  const text = document.getElementsByClassName("slider-text");
  const dot1 = document.getElementById("1");
  const dot2 = document.getElementById("2");
  const dot3 = document.getElementById("3");
  const dot4 = document.getElementById("4");

  function clear() {
    for (i = 0; i < sliderDots.length; i++) {
      sliderDots[i].classList.remove("active");
      // sliderDots[i].classList.remove("pulse");
      slides[i].classList.remove("open");
      text[i].classList.remove("open");
    }
  }

  dot1.addEventListener("click", function () {
    clear();
    sliderDots[0].classList.add("active");
    slides[0].classList.add("open");
    text[0].classList.add("open");
    sliderDots[0].classList.add("pulse");
    setTimeout(function () {
      sliderDots[0].classList.remove("pulse");
    }, 700);
  });

  dot2.addEventListener("click", function () {
    clear();
    sliderDots[1].classList.add("active");
    slides[1].classList.add("open");
    text[1].classList.add("open");
    sliderDots[1].classList.add("pulse");
    setTimeout(function () {
      sliderDots[1].classList.remove("pulse");
    }, 700);
  });

  dot3.addEventListener("click", function () {
    clear();
    sliderDots[2].classList.add("active");
    slides[2].classList.add("open");
    text[2].classList.add("open");
    sliderDots[2].classList.add("pulse");
    setTimeout(function () {
      sliderDots[2].classList.remove("pulse");
    }, 700);
  });

  dot4.addEventListener("click", function () {
    clear();
    sliderDots[3].classList.add("active");
    slides[3].classList.add("open");
    text[3].classList.add("open");
    sliderDots[3].classList.add("pulse");
    setTimeout(function () {
      sliderDots[3].classList.remove("pulse");
    }, 700);
  });

  // function animation(click) {
  // 	if
  // }

  // let slideIndex = 1;

  // sliderDots.addEventListener('click', function()) {
  // 	sliderDots[i]
  // }

  // function thisSlide(i) {
  //   sliderDots.forEach((item) => item.classList.remove("active"));
  //   sliderDots[i].classList.add("active");
  // }

  // function showSlides(n) {
  //   for (i = 0; i < sliderDots.length; i++) {
  //     sliderDots[i].classList.remove("active");
  //     slides[i].classList.remove("open");
  //   }

  //   slides[n - 1].classList.add("open");
  //   sliderDots[n - 1].classList.add("active");
  // }

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  // showSlides(slideIndex);
});
