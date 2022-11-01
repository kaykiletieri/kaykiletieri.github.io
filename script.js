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

//Home

function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}

typeWriter (document.querySelector('.home__titulo'));