const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');

window.proyectos = [
    {
    titulo: "⚡ Pokedex Pokemon",
    descripcion: "La Pokédex es una aplicación web interactiva que te permite explorar y obtener información detallada sobre diferentes Pokémon. Consume la API de Pokémon para mostrar datos precisos y actualizados sobre cada especie de Pokémon.",
    imagen: "./assets/images/project-Pokedex.png",
    alt: "Proyecto: Pokedex",
    demo: "https://acsbitmen.github.io/Pokemon-App/",
    repo: "https://github.com/ACSBITMEN/Pokemon-App.git",
    dataValueTitle: "title-proyecto1",
    dataValueInfo: "info-proyecto1"
    },
    {
    titulo: "🚷 Control de Acceso (Front)",
    descripcion: "Aplicación frontend desarrollada con React, Vite, y Axios que proporciona una interfaz de usuario para la autenticación y gestión de usuarios (Crear, Leer, Actualizar y Borrar).",
    imagen: "https://raw.githubusercontent.com/ACSBITMEN/Login-Frontend/main/public/Readme-Login.gif",
    alt: "Proyecto: Virtual ATM",
    demo: "#",
    repo: "https://github.com/ACSBITMEN/Login-Frontend",
    dataValueTitle: "title-proyecto2",
    dataValueInfo: "info-proyecto2"
    },
    {
    titulo: "👾 Juego de la Serpiente",
    descripcion: "Este es un juego clásico Snake Game 🐍🍎🍐 desarrollado con HTML, CSS y JavaScript y está disponible en línea mediante GitHub Pages. El reto es hacer la mayor puntuación posible comiendo frutas sin tocar los bordes o a ti mismo.",
    imagen: "https://raw.githubusercontent.com/ACSBITMEN/Snake-Game/refs/heads/main/assets/preview-page/Preview2.png",
    alt: "Proyecto: Virtual ATM",
    demo: "https://acsbitmen.github.io/Snake-Game/",
    repo: "https://github.com/ACSBITMEN/Snake-Game",
    dataValueTitle: "title-proyecto3",
    dataValueInfo: "info-proyecto3"
    },
    {
    titulo: "📅 Calendario",
    descripcion: "Calendario interactivo y dinámico desarrollado con HTML, CSS y JavaScript, que muestra los festivos y eventos especiales de Colombia. Además, cuenta con imágenes y citas para cada mes, y una paleta de colores personalizada que cambia mensualmente.",
    imagen: "https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/view/view1.png",
    alt: "Proyecto: Clon de Pinterest",
    demo: "https://acsbitmen.github.io/Calendario-Personalizable/",
    repo: "https://github.com/ACSBITMEN/Calendario-Personalizable",
    dataValueTitle: "title-proyecto4",
    dataValueInfo: "info-proyecto4"
    },
    {
    titulo: "📱 Calculadora",
    descripcion: "Desarrollada con HTML, CSS y JavaScript este es una  calculadora web con dos excelentes temas: en modo oscuro y modo claro.",
    imagen: "https://raw.githubusercontent.com/ACSBITMEN/Calculadora/refs/heads/main/assets/img/view2.png",
    alt: "Proyecto: Virtual ATM",
    demo: "https://acsbitmen.github.io/Calculadora/",
    repo: "https://github.com/ACSBITMEN/Calculadora",
    dataValueTitle: "title-proyecto5",
    dataValueInfo: "info-proyecto5"
    }
];


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


/*===== Carrusel Proyectos =====*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track-proyectos");

    if (!window.proyectos || !Array.isArray(window.proyectos)) {
        console.error("No se encontró el array de proyectos");
        return;
    }
    // Generar las tarjetas desde el array
    window.proyectos.forEach(proyecto => {
    const cardExterna = document.createElement("div");
    cardExterna.className = "card-externa";

    cardExterna.innerHTML = `
        <div class="card" data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom">
            <div class="container-img-proyectos">
                <img class="card-img-top" src="${proyecto.imagen}" alt="${proyecto.alt}">
            </div>
            <div class="container_textCard--proyectos">
                <h3 data-section="proyectos" data-value="${proyecto.dataValueTitle}">${proyecto.titulo}</h3>
                <p data-section="proyectos" data-value="${proyecto.dataValueInfo}">${proyecto.descripcion}</p>
            </div>
            <div class="container_btn--proyectos">
                <a href="${proyecto.demo}" target="_blank">
                    <button class="btn_demo">
                        <i class="bi bi-camera-video"></i>DEMO
                    </button>
                </a>
                <a href="${proyecto.repo}" target="_blank">
                    <button class="btn_repo">
                        <i class="bi bi-code-slash"></i></i>REPO
                    </button>
                </a>
            </div>
        </div>
    `;

    track.appendChild(cardExterna);
});

    if (window.AOS) {
    AOS.init();
    AOS.refresh(); // Forzar a AOS a escanear los nuevos elementos  
    }

    // Lógica del carrusel después de insertar tarjetas
    const cards = document.querySelectorAll(".carousel-track-proyectos .card-externa");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");

    let currentIndex = 0;
    let cardsToShow = getCardsToShow();

    function getCardsToShow() {
        const width = window.innerWidth;
        if (width <= 500) return 1;
        if (width <= 979) return 2;
        return 3;
    }

    function updateCarousel() {
        cardsToShow = getCardsToShow();
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

    window.addEventListener("resize", updateCarousel);
    updateCarousel();



});


/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = document.querySelectorAll('[data-section]');

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

