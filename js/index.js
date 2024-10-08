const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".menu")

hamburger.addEventListener("click", expandir);

function expandir() {
 nav.classList.toggle("active");
}

//PARALLAX

let onda1 = document.getElementById('onda1')
let onda2 = document.getElementById('onda2')
let onda3 = document.getElementById('onda3')
let onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    let rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 600 + rolagemPos * 5 + 'px'
    onda2.style.backgroundPositionX = 500 + rolagemPos * -5 + 'px'
    onda3.style.backgroundPositionX = 400 + rolagemPos * 3 + 'px'
    onda4.style.backgroundPositionX = 300 + rolagemPos * -3 + 'px'
})

// ANIMAÇÃO DA TECNOLIAS
const animatedElements = document.querySelectorAll('.animated-element');

function isElementInView(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function checkElementsVisibility() {
  animatedElements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkElementsVisibility);

document.addEventListener('DOMContentLoaded', checkElementsVisibility);

//TOOLTIPS

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.tecnologias i');

    icons.forEach(icon => {
        const tooltipText = icon.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        icon.parentElement.appendChild(tooltip);
    });
});
