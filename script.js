// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Create the Back to Top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTop";
  backToTopBtn.title = "Back to top";
  backToTopBtn.textContent = "↑ Top";

  // Basic styles (optional if not defined in CSS)
  backToTopBtn.style.display = "none";
  backToTopBtn.style.position = "fixed";
  backToTopBtn.style.bottom = "30px";
  backToTopBtn.style.right = "30px";
  backToTopBtn.style.padding = "0.75rem 1rem";
  backToTopBtn.style.fontSize = "1rem";
  backToTopBtn.style.border = "none";
  backToTopBtn.style.borderRadius = "50px";
  backToTopBtn.style.backgroundColor = "#00bfa6";
  backToTopBtn.style.color = "#fff";
  backToTopBtn.style.cursor = "pointer";
  backToTopBtn.style.zIndex = "1000";
  backToTopBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
  backToTopBtn.style.transition = "opacity 0.3s ease";

  document.body.appendChild(backToTopBtn);

  // Show/hide button on scroll
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly when clicked
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
