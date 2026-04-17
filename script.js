function escribir(texto, section) {
    const elemento = document.querySelector(section);
    let i = 0;
    elemento.textContent = "";
    
    function loop() {
        if (i < texto.length) {
            elemento.textContent += texto[i];
            i++;
            setTimeout(loop, 60);
        }
    }
    
    loop();
}

function animarAlVerlo(texto, selector) {
    const elemento = document.querySelector(selector);

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                escribir(texto, selector);
            } else {
                elemento.textContent = ""; // lo borra cuando sale
            }
        });
    });

    observer.observe(elemento);
}


function animarSeccion(selector) {
    const elemento = document.querySelector(selector);
    elemento.classList.add('section-hidden');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                elemento.classList.add('section-visible');
            } else {
                elemento.classList.remove('section-visible');
            }
        });
    });

    observer.observe(elemento);
}

window.onload = function() {
    animarAlVerlo('¿Quien soy?', '.content-incio h2');
    animarAlVerlo('Mis habilidades', '.content-skills h2');
    animarAlVerlo('¿Cual es mi Objetivo?', '.header-obj h2');
    animarAlVerlo('Titulos certificados', '.contenido-cert h2');

    // Agregá las secciones que querés que aparezcan con scroll
    animarSeccion('.skills');
    animarSeccion('.inicio');
    animarSeccion('.container-skills');
    animarSeccion('.object');
    animarSeccion('.certifications');
}




