document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const panel = this.nextElementSibling;

      // Collapse others
      accordions.forEach((acc) => {
        if (acc !== this) {
          acc.classList.remove("active");
          acc.nextElementSibling.style.display = "none";
        }
      });

      // Toggle this one
      const isVisible = panel.style.display === "block";
      this.classList.toggle("active", !isVisible);
      panel.style.display = isVisible ? "none" : "block";
    });
  });
});
