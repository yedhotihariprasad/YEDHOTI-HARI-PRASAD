// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// Smooth reveal animation

const revealElements = document.querySelectorAll(
  ".project-card, .skill-card, .process-item, .timeline-item, .stat"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });
  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(element);

});
