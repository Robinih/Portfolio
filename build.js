const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 200)});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navlist.classList.remove('open');
 };
 
const sr = ScrollReveal ({
   distance: '40px',
   duration: 2000,
   delay: 160,
 });
 
sr.reveal('.content',{origin: 'top'});
sr.reveal('.about-img, .servers-items, .about-text',{origin: 'bottom'});
sr.reveal('.about-text h2, .text-center',{origin: 'top'});
sr.reveal('#0',{origin: 'bottom'});
sr.reveal('#1',{origin: 'bottom'});
sr.reveal('#2',{origin: 'bottom'});
sr.reveal('.btn1', { origin: 'bottom' });
sr.reveal('.end-section h3',{origin: 'top'});
sr.reveal('.end-section p',{origin: 'top'});
sr.reveal('.end-section div',{origin: 'top'});
sr.reveal('.last-p',{origin: 'top'});

sr.reveal('.container1', { origin: 'bottom' });
