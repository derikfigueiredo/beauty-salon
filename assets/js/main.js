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

