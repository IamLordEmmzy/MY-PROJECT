function showSideBar() {
  document.querySelector(".sidebar").classList.add("active");
}

function hideSideBar() {
  document.querySelector(".sidebar").classList.remove("active");
}

// Optional: close sidebar when a link inside is clicked
document.querySelectorAll(".sidebar li a").forEach((link) => {
  link.addEventListener("click", () => {
    hideSideBar();
  });
});

function displayMessage() {
  
}


// Global ScrollReveal settings
const scrollRevealOption = {
  distance: "60px",
  duration: 1000,
  easing: "ease-out",
  opacity: 0,
  reset: true, // ✅ animate again on scroll
};

// Text sections → slide from bottom
ScrollReveal().reveal(".question", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 200,
});
ScrollReveal().reveal(".description", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 400,
});
ScrollReveal().reveal(".note", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 600,
});

// Image → slide from right
ScrollReveal().reveal(".my-image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});

// Navbar menu items → staggered from bottom
ScrollReveal().reveal(".navbar-menu li", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 100,
});

// Sidebar items → staggered from right
ScrollReveal().reveal(".sidebar li", {
  ...scrollRevealOption,
  origin: "right",
  interval: 100,
});
