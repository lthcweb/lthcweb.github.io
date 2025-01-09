const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarNav = document.querySelector('.sidebar-nav');

sidebarToggle.addEventListener('click', () => {
  sidebarNav.classList.toggle('show');
});
