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

