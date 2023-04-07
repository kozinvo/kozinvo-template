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






//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luZG93TG9hZCk7XG5cbmZ1bmN0aW9uIHdpbmRvd0xvYWQoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGxldCBob21lQ2VudGVyID0gaG9tZS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFRvcCk7XG4gICAgLy8gY29uc29sZS5sb2coaG9tZUNlbnRlcik7XG4gICAgaWYgKHNjcm9sbFRvcCA+IGhvbWVDZW50ZXIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiaW5nbycpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRhYkJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfX2J0bicpKTtcbmNvbnN0IHRhYkluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJfX2luZGljYXRvcicpO1xuY29uc3QgdGFiQ29udGVudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9fY29udGVudCcpKTtcbnRhYkJ0bnNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG50YWJDb250ZW50WzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xubGV0IGFjdGl2ZUJ0biA9IHRhYkJ0bnNbMF07XG5sZXQgYWN0aXZlVGFiQ29udGVudCA9IHRhYkNvbnRlbnRbMF07XG5jb25zdCBudW1UYWIgPSB0YWJCdG5zLmxlbmd0aDtcbmNvbnNvbGUubG9nKG51bVRhYik7XG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbnVtLXRhYicsIG51bVRhYik7XG5cbi8vIEV2ZW50cyBjbGlja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XG5mdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xuICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG5cbiAgLy8gYnVyZ2VyIG1lbnVcbiAgaWYgKHRhcmdldEVsLmNsb3Nlc3QoJy5pY29uLW1lbnUnKSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcbiAgfVxuXG4gIC8vYWhjaG9yIGxpbmtzXG4gIGlmICh0YXJnZXRFbC5jbG9zZXN0KCdbZGF0YS1nb3RvXScpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vY2xvc2UgYnVyZ2VyIGJ5IHRhcCBtZW51IGxpbmtzIG9uIG1vYmlsZVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpIDpcbiAgICAgIG51bGw7XG5cbiAgICBjb25zdCBnb1RvID0gdGFyZ2V0RWwuY2xvc2VzdCgnW2RhdGEtZ290b10nKS5kYXRhc2V0LmdvdG87XG4gICAgY29uc3QgZ29Ub0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihnb1RvKTtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChnb1RvRWwpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogZ29Ub0VsLm9mZnNldFRvcCAtIChoZWFkZXJIZWlnaHQgKyAxNSksXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy90YWJzXG4gIGlmICh0YXJnZXRFbC5jbG9zZXN0KCcudGFiX19idG4nKSkge1xuICAgIGxldCBidG4gPSB0YXJnZXRFbDtcbiAgICBjaGFuZ2VBY3RpdmVUYWIoKTtcbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVUYWIoKSB7XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBhY3RpdmVCdG4gPSBidG47XG4gICAgICBjaGFuZ2VJbmRpY2F0b3IoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNoYW5nZUluZGljYXRvcigpIHtcbiAgICAgIGNvbnN0IGluZGV4QnRuID0gdGFiQnRucy5pbmRleE9mKGJ0bik7XG4gICAgICB0YWJJbmRpY2F0b3Iuc3R5bGUubGVmdCA9IGBjYWxjKCR7aW5kZXhCdG59KjEwMCUvJHtudW1UYWJ9KWA7XG4gICAgICBjaGFuZ2VDb250ZW50KGluZGV4QnRuKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNoYW5nZUNvbnRlbnQoaW5kZXgpIHtcbiAgICAgIGFjdGl2ZVRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB0YWJDb250ZW50W2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGFjdGl2ZVRhYkNvbnRlbnQgPSB0YWJDb250ZW50W2luZGV4XTtcbiAgICB9XG5cbiAgfVxufTtcblxuLy9MYXVuY2ggY2lyY2xlIHByb2dyZXNzYmFyXG5mdW5jdGlvbiBzdGFydENpcmNsZXMoKSB7XG4gIGNvbnN0IHByb2dyZXNzVmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxsX19wcm9ncmVzcyBzcGFuJyk7XG4gIHByb2dyZXNzVmFsdWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzc0VsID0gZWxlbWVudC5jbG9zZXN0KCcuc2tpbGxfX3Byb2dyZXNzJyk7XG4gICAgbGV0IHByb2dyZXNzTnVtYmVyID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAocHJvZ3Jlc3NOdW1iZXIuc2xpY2UoLTEpID09PSAnJScpID9cbiAgICAgIHByb2dyZXNzTnVtYmVyID0gK3Byb2dyZXNzTnVtYmVyLnNsaWNlKDAsIC0xKSA6IHByb2dyZXNzTnVtYmVyID0gK3Byb2dyZXNzTnVtYmVyO1xuXG4gICAgbGV0IHByb2dyZXNzVmFsdWVTdGFydCA9IDA7XG4gICAgbGV0IHByb2dyZXNzVmFsdWVFbmQgPSBwcm9ncmVzc051bWJlcjtcbiAgICBsZXQgc3BlZWQgPSAyMDtcbiAgICBsZXQgcHJvZ3Jlc3MgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBwcm9ncmVzc1ZhbHVlU3RhcnQrKztcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1ZhbHVlU3RhcnR9JWA7XG4gICAgICBwcm9ncmVzc0VsLnN0eWxlLmJhY2tncm91bmQgPSBgY29uaWMtZ3JhZGllbnQoI0ZGNjQ2NCAke3Byb2dyZXNzVmFsdWVTdGFydCAqIDMuNn1kZWcsICNmZmYgMGRlZylgO1xuICAgICAgaWYgKHByb2dyZXNzVmFsdWVTdGFydCA9PT0gcHJvZ3Jlc3NWYWx1ZUVuZCkge1xuICAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzKTtcbiAgICAgIH1cbiAgICB9LCBzcGVlZCk7XG4gIH0pO1xufTtcbnN0YXJ0Q2lyY2xlcygpO1xuXG5cblxuXG5cblxuIl0sImZpbGUiOiJtYWluLmpzIn0=
