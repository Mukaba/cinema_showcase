const pageTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come Back !';
});
window.addEventListener('focus', () => {
  document.title = pageTitle;
});

const menuBtn = document.getElementById('menubtn');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const noscroll = document.querySelector('html, body');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  noscroll.classList.add('noscroll');
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  noscroll.classList.remove('noscroll');
});