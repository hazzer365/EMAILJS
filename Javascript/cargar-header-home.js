fetch('headerForm.html') // Cargar el archivo headerForm.html
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(data => {
        const headerContainer = document.getElementById('headerForm-container');

        // Crear el Shadow DOM
        const shadow = headerContainer.attachShadow({ mode: 'open' });

        // Contenedor del contenido del header
        const wrapper = document.createElement('div');
        wrapper.innerHTML = data;

        // Estilos del header
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'Estilos/styles.css');

        // Insertar estilos y contenido en el Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        // Asignar evento al menú hamburguesa
        shadow.querySelector('.menu-icon').addEventListener('click', () => {
            const navLinks = shadow.querySelector('.nav ul');
            if (navLinks) {
                navLinks.classList.toggle('active'); // Mostrar/ocultar menú
                console.log('¡Haz hecho click en el menú hamburguesa!');
            } else {
                console.error('No se encontró el menú de navegación.');
            }
        });

        console.log('Header cargado correctamente.');
    })
    .catch(error => {
        console.error('Error al cargar el header:', error);
    });
