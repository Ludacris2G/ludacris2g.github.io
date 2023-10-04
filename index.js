const buttons = document.querySelectorAll('.neon-button');
const darkModeBtn = document.querySelector('#dark-mode');
const linkedinText = document.getElementById('email').innerText;
const scrollToTopBtn = document.getElementById('back-to-top-btn');

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(linkedinText);
    console.log('Copied');
    alert('Email copied to clipboard');
  } catch (err) {
    console.log('Failed: ', err);
  }
};

// NEON BUTTONS
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 500);
  });
});

document.getElementById('email-btn').addEventListener('click', function () {
  copyContent();
});

const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

darkModeBtn.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
  sun.classList.toggle('sun');
  moon.classList.toggle('moon');
});

// SCROLL EFFECT - og code mf
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target.classList[0];

      if (entry.target.classList[0] === 'bio-text') {
        const randomDuration = (Math.random() * 1.5 + 0.5).toFixed(2) + 's';
        entry.target.style.transition = `all ${randomDuration}`;
      }

      entry.target.classList.add(`${target}-show`);
    }
  });
});

const projectDivs = document.querySelectorAll('.project-div');
const skillsPacks = document.querySelectorAll('.skills-pack');
const bioText = document.querySelectorAll('.bio-text');
const cardWrapper = document.querySelectorAll('.card-wrapper');
const smallIcon = document.querySelectorAll('.small-icon');
const info = document.querySelectorAll('.info');
const languages = document.querySelectorAll('.languages-container');

projectDivs.forEach((el) => observer.observe(el));
skillsPacks.forEach((el) => observer.observe(el));
bioText.forEach((el) => observer.observe(el));
cardWrapper.forEach((el) => observer.observe(el));
smallIcon.forEach((el) => observer.observe(el));
info.forEach((el) => observer.observe(el));
languages.forEach((el) => observer.observe(el));

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.transform = 'translateY(0)';
  } else {
    scrollToTopBtn.style.transform = 'translateY(100px)';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollToTopBtn.addEventListener('click', scrollToTop);
