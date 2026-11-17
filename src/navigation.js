export function setActiveNav(buttonId) {
  const navButtons = document.querySelectorAll('nav .btn');

  navButtons.forEach((button) => {
    button.classList.toggle('is-active', button.id === buttonId);
  });
}
