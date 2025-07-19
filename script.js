const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else {
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('.nav_menu').classList.remove('not-active');
        document.querySelector('.nav_menu').classList.add('active');
    }
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

/*===== class active por secciones =====*/
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

/*===== Boton y función ir arriba =====*/
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*===== Clonar items del Carrusel Infinito =====*/
document.addEventListener("DOMContentLoaded", function () {
    const tracks = document.querySelectorAll('.carousel-track');
    
    tracks.forEach(track => {
        const items = Array.from(track.children);
        
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    });
});


/*===== Clonar items del Carrusel Proyectos =====*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track-proyectos");
    const cards = document.querySelectorAll(".carousel-track-proyectos .card-externa");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");

    let currentIndex = 0;
    let cardsToShow = getCardsToShow(); // dinámico según pantalla

    function getCardsToShow() {
        const width = window.innerWidth;
        if (width <= 500) return 1;        // móvil
        if (width <= 979) return 2;        // tablet
        return 3;                          // desktop
    }

    function updateCarousel() {
        cardsToShow = getCardsToShow(); // recalcular al redimensionar
        const cardWidth = cards[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex > cards.length - cardsToShow) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - cardsToShow;
        }
        updateCarousel();
    });

    window.addEventListener("resize", () => {
        updateCarousel();
    });

    updateCarousel(); // inicial
});

