document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior to all links with hash (#) in the href
  document.querySelectorAll('h3[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop, // Adjust for any fixed header height
          behavior: "smooth",
        });
      }
    });
  });
});
