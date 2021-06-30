const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(let element of toggle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  });
};

/* Quando alguém clicar em um item do menu, o menu será escondido */
const links = document.querySelectorAll('nav ul li a');

links.forEach((link)=>{
  link.addEventListener('click', ()=>{
    nav.classList.remove('show');
  });
});

/* Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  autoplay: {
    delay: 5000
  }
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social`, 
  {interval: 100}
)
