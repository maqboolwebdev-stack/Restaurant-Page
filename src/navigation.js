export function setActiveNav(buttonId) {
  const navButtons = document.querySelectorAll('nav .btn');

  navButtons.forEach((button) => {
    const isActive = button.id === buttonId;
    button.classList.toggle('is-active', isActive);
    if (isActive) {
      button.setAttribute('aria-current', 'page');
    } else {
      button.removeAttribute('aria-current');
    }
  });
}
