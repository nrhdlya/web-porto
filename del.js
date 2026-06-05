// Custom cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;

  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';

  requestAnimationFrame(animRing);
}

animRing();

document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform =
      'translate(-50%, -50%) scale(2)';
    cursorRing.style.transform =
      'translate(-50%, -50%) scale(1.5)';
    cursorRing.style.opacity = '0.25';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.transform =
      'translate(-50%, -50%) scale(1)';
    cursorRing.style.transform =
      'translate(-50%, -50%) scale(1)';
    cursorRing.style.opacity = '0.5';
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document
  .querySelectorAll('.reveal')
  .forEach((el) => observer.observe(el));

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});