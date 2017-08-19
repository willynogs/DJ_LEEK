//- log my info
console.log('%c//--\n\tmade by @willynogs in columbus, ohio\n\t[willynogs.com]\n--//', 'background: black; color: lime;');

//-- add click event for menu
var t = document.getElementById('nav');
var ti = document.getElementById('nav-menu-inner');
var m = document.getElementById('nav-overlay');
t.addEventListener('touchend', handleClick, false);
//t.addEventListener('click', handleClick, false);
function handleClick(e) {
  ti.classList.toggle('nav-menu-active');
  m.classList.toggle('nav-overlay-show');
}
