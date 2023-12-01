document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  nextBtn.addEventListener("click", function () {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carousel.children.length - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    carousel.style.transform = `translateX(${translateValue})`;
  }
});
