document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.titulo-soluciones');
    const solutions = document.querySelectorAll('.solucion');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.classList.add('focused');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(title);

    const solutionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.5 });

    solutions.forEach(solution => solutionObserver.observe(solution));
});


//Animación de los numeros
document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const activeAnimations = new Map();

    function startAnimation(element) {
        if (activeAnimations.has(element)) {
            clearInterval(activeAnimations.get(element));
        }
        const originalText = element.dataset.original || element.textContent.trim();
        element.dataset.original = originalText;
        const letters = [...originalText];
        let iterations = 0;
        const originalWidth = element.offsetWidth;
        element.style.width = `${originalWidth}px`;
        element.style.display = 'inline-block';

        const interval = setInterval(() => {
            const newText = letters
                .map((char, index) => {
                    if (Math.random() > 0.7 || iterations > index) {
                        return char;
                    }
                    return getRandomChar();
                })
                .join('');
            element.textContent = newText;
            iterations++;
            if (iterations > letters.length) {
                clearInterval(interval);
                element.textContent = originalText;
                element.style.width = '';
                activeAnimations.delete(element);
            }
        }, 120);

        activeAnimations.set(element, interval);
    }

    function stopAnimation(element) {
        if (activeAnimations.has(element)) {
            clearInterval(activeAnimations.get(element));
            activeAnimations.delete(element);
        }

        if (element.dataset.original) {
            element.textContent = element.dataset.original;
            element.style.width = '';
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const number = entry.target;
                if (entry.isIntersecting) {
                    startAnimation(number);
                } else {
                    stopAnimation(number);
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    numbers.forEach((number) => observer.observe(number));
});

function getRandomChar() {
    const chars = '0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
}


//animación de los videos
document.addEventListener("DOMContentLoaded", () => {
    const solutions = document.querySelectorAll(".solucion");

    solutions.forEach((card) => {
        const video = card.querySelector("[data-video]");
        let rewindInterval;

        card.addEventListener("mouseover", () => {
            if (video) {
                clearInterval(rewindInterval);
                video.play();
            }
        });

        card.addEventListener("mouseout", () => {
            if (video) {
                video.pause();
                rewindInterval = setInterval(() => {
                    if (video.currentTime > 0) {
                        video.currentTime -= 0.05;
                    } else {
                        clearInterval(rewindInterval);
                    }
                }, 70);
            }
        });
    });
});
document.querySelector('.back-top-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto aplica la animación de desplazamiento suave
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Selección de los botones
    const btnPrecalificate = document.querySelector('.btn-precalificate');
    const btnWhatsApp = document.querySelector('.btn-whatsapp');

    // Altura de la navbar
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Detecta el scroll de la página
    window.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            // Añade las clases para el estado flotante con animación
            btnPrecalificate.classList.add('btn-fixed');
            btnWhatsApp.classList.add('btn-fixed');

            // Añade la clase de visibilidad después de un breve retraso para activar la animación
            setTimeout(() => {
                btnPrecalificate.classList.add('btn-visible');
                btnWhatsApp.classList.add('btn-visible');
            }, 10); // Usamos un pequeño retraso (10ms) para que la animación funcione correctamente

            // Oculta el texto del botón Precalificate cuando está flotante
            btnPrecalificate.classList.add('hide-text');
        } else {
            // Retira las clases para regresar suavemente a la navbar
            btnPrecalificate.classList.remove('btn-visible');
            btnWhatsApp.classList.remove('btn-visible');

            // Muestra el texto del botón Precalificate al volver a la navbar
            btnPrecalificate.classList.remove('hide-text');

            // Retrasa la eliminación de la clase 'btn-fixed' para que regrese más rápido
            setTimeout(() => {
                btnPrecalificate.classList.remove('btn-fixed');
                btnWhatsApp.classList.remove('btn-fixed');
            }, 100); // Tiempo de espera al regresar a la navbar
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Selección de los botones
    const btnPrecalificate = document.querySelector('.btn-precalificate');
    const btnWhatsApp = document.querySelector('.btn-whatsapp');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Detecta el scroll de la página
    window.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            // El botón de Precalificate y WhatsApp ya no están en la navbar, se convierten en círculos
            btnPrecalificate.classList.add('circle');
            btnWhatsApp.classList.add('circle');
        } else {
            // El botón está en la navbar, se vuelve al estilo normal
            btnPrecalificate.classList.remove('circle');
            btnWhatsApp.classList.remove('circle');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Selección del botón
    const btnPrecalificate = document.querySelector('.btn-precalificate');

    // Evento para mostrar el texto al pasar el cursor
    btnPrecalificate.addEventListener('mouseover', () => {
        btnPrecalificate.classList.remove('hide-text'); // Asegura que el texto sea visible
    });

    // Evento para ocultar el texto al retirar el cursor
    btnPrecalificate.addEventListener('mouseout', () => {
        btnPrecalificate.classList.add('hide-text'); // Oculta el texto nuevamente
    });
});

