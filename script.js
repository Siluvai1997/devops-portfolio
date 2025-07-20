document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-unused-vars
  const mixer = mixitup(".project-grid", {
    selectors: { target: ".mix" },
    animation: { duration: 260 },
  });

  const placeholder = document.getElementById("placeholder-card");
  const githubTile = document.getElementById("github-tile");

  // Show/hide GitHub card based on filter
  const updateGitHubTile = (filter) => {
    if (filter === ".featured" || filter === "all") {
      githubTile.style.display = "block";
    } else {
      githubTile.style.display = "none";
    }
  };

  // Attach click event to filter buttons
  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      updateGitHubTile(filter);
      placeholder.style.display = "none"; // Hide placeholder after any click
    });
  });

  // Auto-click featured on load, then hide placeholder
  document.querySelector('[data-filter=".featured"]').click();
  placeholder.style.display = "none";
});
