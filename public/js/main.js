document.addEventListener('click', documentActions);
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRBY3Rpb25zKTtcbmZ1bmN0aW9uIGRvY3VtZW50QWN0aW9ucyhlKSB7XG4gIGNvbnN0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gIC8vIGJ1cmdlciBtZW51XG4gIGlmICh0YXJnZXRFbC5jbG9zZXN0KCcuaWNvbi1tZW51JykpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG4gIH1cbiAgLy9haGNob3IgbGlua3NcbiAgaWYgKHRhcmdldEVsLmNsb3Nlc3QoJ1tkYXRhLWdvdG9dJykpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jbG9zZSBidXJnZXIgYnkgdGFwIG1lbnUgbGlua3Mgb24gbW9iaWxlXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcGVuJykgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJykgOlxuICAgICAgbnVsbDtcblxuICAgIGNvbnN0IGdvVG8gPSB0YXJnZXRFbC5jbG9zZXN0KCdbZGF0YS1nb3RvXScpLmRhdGFzZXQuZ290bztcbiAgICBjb25zdCBnb1RvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdvVG8pO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGdvVG9FbCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBnb1RvRWwub2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIDE1KSxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59Il0sImZpbGUiOiJtYWluLmpzIn0=