// ====== FAQ Accordion ======
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ====== Progress Bar Animation ======
const bars = document.querySelectorAll(".bar");
let progressStarted = false;

function animateProgress() {
  bars.forEach(bar => {
    const target = bar.getAttribute("data-progress");
    bar.style.width = target + "%";
  });
}

// ====== Testimonials Slider ======
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.remove("active"));
  slides[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.querySelector(".prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// ====== Scroll Reveal Animation ======
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// ====== Animated Counters ======
let counters = document.querySelectorAll(".counter");
let counterStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    counter.innerText = "0";
    let update = () => {
      let target = +counter.getAttribute("data-target");
      let current = +counter.innerText;
      let increment = target / 100;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

window.addEventListener("scroll", () => {
  let statsSection = document.querySelector(".stats");
  if (statsSection && !counterStarted) {
    let statsPos = statsSection.getBoundingClientRect().top;
    if (statsPos < window.innerHeight) {
      animateCounters();
      counterStarted = true;
    }
  }

  let skillsSection = document.querySelector(".skills");
  if (skillsSection && !progressStarted) {
    let skillsPos = skillsSection.getBoundingClientRect().top;
    if (skillsPos < window.innerHeight) {
      animateProgress();
      progressStarted = true;
    }
  }
});
