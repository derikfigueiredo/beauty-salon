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

/* mudar o header da página quando der scroll*/
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll')
  }
}
//A propriedade HTMLElement.offsetHeight é somente leitura e retorna um valor do tipo inteiro a altura de um elemento incluindo  padding-top+padding-bottom+border-top+border-bottom.
//Retorna o número de pixels que o documento já rolou verticalmente.

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
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
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

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página*/
const sections = document.querySelectorAll('main section[id]');
console.log(sections)

function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for( const section of sections ) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active');
    }
  }
}

/*When scroll*/
window.addEventListener('scroll', ()=>{
  changeHeaderWhenScroll() 
  backToTop() 
  activateMenuAtCurrentSection() 
})
