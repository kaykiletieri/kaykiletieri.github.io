//alert("Estou em desenvolvimento, volte mais tarde!")

//Header
const btnMobile = document.querySelector('.header__btn');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('--active');

    const active = nav.classList.contains('--active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".header__link");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("--active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("--active");
      });
    }
  });
};
//Home

function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}

typeWriter (document.querySelector('.home__titulo'));