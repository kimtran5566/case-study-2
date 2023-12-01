document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;
  
    function showSlide(index) {
      const totalSlides = document.querySelectorAll(".slide").length;
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const translateValue = -currentIndex * 100 + "%";
      carousel.style.transform = `translateX(${translateValue})`;
    }
  
    // Auto slide change interval (adjust as needed)
    setInterval(function () {
      currentIndex++;
      showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds (adjust as needed)
  
    // Optionally, you can add event listeners for navigation buttons or gestures
    // For example, left and right arrow keys for navigation
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        currentIndex--;
        showSlide(currentIndex);
      } else if (event.key === "ArrowRight") {
        currentIndex++;
        showSlide(currentIndex);
      }
    });
  });
  