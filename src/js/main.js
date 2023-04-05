"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  const home = document.querySelector('.home');
  console.log(home);
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let homeCenter = home.offsetHeight / 2;
    // console.log(scrollTop);
    // console.log(homeCenter);
    if (scrollTop > homeCenter) {
      console.log('bingo');
    }
  });
}


// Events click
document.addEventListener("click", documentActions);
function documentActions(e) {
  const targetEl = e.target;

  // burger menu
  if (targetEl.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  //ahchor links
  if (targetEl.closest('[data-goto]')) {
    e.preventDefault();
    //close burger by tap menu links on mobile
    document.documentElement.classList.contains('menu-open') ? document.documentElement.classList.remove('menu-open') :
      null;

    const goTo = targetEl.closest('[data-goto]').dataset.goto;
    const goToEl = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;
    if (goToEl) {
      window.scrollTo({
        top: goToEl.offsetTop - (headerHeight + 15),
        behavior: "smooth"
      })
    }
  }
};




//Launch circle progressbar
function startCircles() {
  const progressValues = document.querySelectorAll('.skill__progress span');
  progressValues.forEach((element) => {
    const progressEl = element.closest('.skill__progress');
    let progressNumber = element.textContent;
    (progressNumber.slice(-1) === '%') ?
      progressNumber = +progressNumber.slice(0, -1) : progressNumber = +progressNumber;

    let progressValueStart = 0;
    let progressValueEnd = progressNumber;
    let speed = 20;
    let progress = setInterval(() => {
      progressValueStart++;
      element.textContent = `${progressValueStart}%`;
      progressEl.style.background = `conic-gradient(#FF6464 ${progressValueStart * 3.6}deg, #fff 0deg)`;
      if (progressValueStart === progressValueEnd) {
        clearInterval(progress);
      }
    }, speed);
  });
};
startCircles();



