"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  const home = document.querySelector('.home');

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let homeCenter = home.offsetHeight / 2;
    // console.log(scrollTop);
    // console.log(homeCenter);
    if (scrollTop > homeCenter) {
      // console.log('bingo');
    }
  });
}

const tabBtns = Array.from(document.querySelectorAll('.tab__btn'));
const tabIndicator = document.querySelector('.tab__indicator');
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
tabBtns[0].classList.add('active');
tabContent[0].classList.add('active');
let activeBtn = tabBtns[0];
let activeTabContent = tabContent[0];
const numTab = tabBtns.length;
console.log(numTab);
const root = document.querySelector(':root');
root.style.setProperty('--num-tab', numTab);

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


  //tabs
  if (targetEl.closest('.tab__btn')) {
    let btn = targetEl;
    changeActiveTab();
    function changeActiveTab() {
      if (btn.classList.contains('active')) {
        return
      }
      btn.classList.add('active');
      activeBtn.classList.remove('active');
      activeBtn = btn;
      changeIndicator();
    };
    function changeIndicator() {
      const indexBtn = tabBtns.indexOf(btn);
      tabIndicator.style.left = `calc(${indexBtn}*100%/${numTab})`;
      changeContent(indexBtn);
    };
    function changeContent(index) {
      activeTabContent.classList.remove('active');
      tabContent[index].classList.add('active');
      activeTabContent = tabContent[index];
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






