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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luZG93TG9hZCk7XG5cbmZ1bmN0aW9uIHdpbmRvd0xvYWQoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICBjb25zb2xlLmxvZyhob21lKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgbGV0IGhvbWVDZW50ZXIgPSBob21lLm9mZnNldEhlaWdodCAvIDI7XG4gICAgLy8gY29uc29sZS5sb2coc2Nyb2xsVG9wKTtcbiAgICAvLyBjb25zb2xlLmxvZyhob21lQ2VudGVyKTtcbiAgICBpZiAoc2Nyb2xsVG9wID4gaG9tZUNlbnRlcikge1xuICAgICAgY29uc29sZS5sb2coJ2JpbmdvJyk7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLyBFdmVudHMgY2xpY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEFjdGlvbnMpO1xuZnVuY3Rpb24gZG9jdW1lbnRBY3Rpb25zKGUpIHtcbiAgY29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldDtcblxuICAvLyBidXJnZXIgbWVudVxuICBpZiAodGFyZ2V0RWwuY2xvc2VzdCgnLmljb24tbWVudScpKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xuICB9XG5cbiAgLy9haGNob3IgbGlua3NcbiAgaWYgKHRhcmdldEVsLmNsb3Nlc3QoJ1tkYXRhLWdvdG9dJykpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jbG9zZSBidXJnZXIgYnkgdGFwIG1lbnUgbGlua3Mgb24gbW9iaWxlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcGVuJykgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJykgOlxuICAgICAgbnVsbDtcblxuICAgIGNvbnN0IGdvVG8gPSB0YXJnZXRFbC5jbG9zZXN0KCdbZGF0YS1nb3RvXScpLmRhdGFzZXQuZ290bztcbiAgICBjb25zdCBnb1RvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdvVG8pO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGdvVG9FbCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBnb1RvRWwub2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIDE1KSxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59O1xuXG5cblxuXG4vL0xhdW5jaCBjaXJjbGUgcHJvZ3Jlc3NiYXJcbmZ1bmN0aW9uIHN0YXJ0Q2lyY2xlcygpIHtcbiAgY29uc3QgcHJvZ3Jlc3NWYWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxfX3Byb2dyZXNzIHNwYW4nKTtcbiAgcHJvZ3Jlc3NWYWx1ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzRWwgPSBlbGVtZW50LmNsb3Nlc3QoJy5za2lsbF9fcHJvZ3Jlc3MnKTtcbiAgICBsZXQgcHJvZ3Jlc3NOdW1iZXIgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgIChwcm9ncmVzc051bWJlci5zbGljZSgtMSkgPT09ICclJykgP1xuICAgICAgcHJvZ3Jlc3NOdW1iZXIgPSArcHJvZ3Jlc3NOdW1iZXIuc2xpY2UoMCwgLTEpIDogcHJvZ3Jlc3NOdW1iZXIgPSArcHJvZ3Jlc3NOdW1iZXI7XG5cbiAgICBsZXQgcHJvZ3Jlc3NWYWx1ZVN0YXJ0ID0gMDtcbiAgICBsZXQgcHJvZ3Jlc3NWYWx1ZUVuZCA9IHByb2dyZXNzTnVtYmVyO1xuICAgIGxldCBzcGVlZCA9IDIwO1xuICAgIGxldCBwcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHByb2dyZXNzVmFsdWVTdGFydCsrO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzVmFsdWVTdGFydH0lYDtcbiAgICAgIHByb2dyZXNzRWwuc3R5bGUuYmFja2dyb3VuZCA9IGBjb25pYy1ncmFkaWVudCgjRkY2NDY0ICR7cHJvZ3Jlc3NWYWx1ZVN0YXJ0ICogMy42fWRlZywgI2ZmZiAwZGVnKWA7XG4gICAgICBpZiAocHJvZ3Jlc3NWYWx1ZVN0YXJ0ID09PSBwcm9ncmVzc1ZhbHVlRW5kKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgIH0sIHNwZWVkKTtcbiAgfSk7XG59O1xuc3RhcnRDaXJjbGVzKCk7XG5cblxuXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
