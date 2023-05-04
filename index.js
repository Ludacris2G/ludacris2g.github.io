const buttons = document.querySelectorAll(".neon-button");
const darkModeBtn = document.querySelector('#dark-mode');
const linkedinText = document.getElementById('email').innerText;
// const scrollToTop 

// const scrollToTop = () => {
//   window.scrollTo(0, 0);
// };

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(linkedinText);
        console.log('Copied');
        alert("Email copied to clipboard")
    } catch (err) {
        console.log('Failed: ', err);
    }
};

// NEON BUTTONS
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 500);
  });
});

document.getElementById('email-btn').addEventListener('click', function() {
    copyContent();
});

const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    sun.classList.toggle('sun');
    moon.classList.toggle('moon');
})

// document.onload = () => {
//   scrollToTop();
// }

// window.onload = function() {
//   window.scrollTo(0, 0);
// }
