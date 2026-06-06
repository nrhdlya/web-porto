// =======================
// CUSTOM CURSOR
// =======================

const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");

let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;

  cursor.style.left = `${mx}px`;
  cursor.style.top = `${my}px`;
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  cursorRing.style.left = `${rx}px`;
  cursorRing.style.top = `${ry}px`;

  requestAnimationFrame(animateRing);
}

animateRing();

// Hover Effect
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    cursorRing.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorRing.style.opacity = "0.25";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
    cursorRing.style.opacity = "0.5";
  });
});

// =======================
// SCROLL REVEAL
// =======================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 80);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => observer.observe(el));

// =======================
// MOBILE MENU
// =======================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tutup menu setelah link diklik
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});