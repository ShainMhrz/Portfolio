const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all siblings (more efficient)
    link.parentElement.parentElement
      .querySelectorAll("li.active")
      .forEach((activeLink) => {
        activeLink.classList.remove("active");
      });

    // Toggle active class on current links
    link.parentElement.classList.toggle("active");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  reset: true,
  interval: 600,
  opacity: 0,
});

// sr.reveal(`.home_subtitle,.home_name,.home_title,.button`);
sr.reveal(`.home_data,.home_social`);
sr.reveal(`.home_description`, {
  origin: "left",
  duration: 2600,
});
sr.reveal(`.home_image`, { origin: "bottom" });
