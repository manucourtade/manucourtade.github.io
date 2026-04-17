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
                observer.unobserve(elemento); // para que no se repita
            }
        });
    });

    observer.observe(elemento);
}
window.onload = function() {
    // QUIEN SOY ANIMACION
    animarAlVerlo('¿Quien soy?', '.content-incio h2');

    // MIS HABILIDADES ANIMACION
    animarAlVerlo('Mis habilidades', '.content-skills h2');

    // OBJETIVO ANIMACION
    animarAlVerlo('¿Cual es mi objetivo?', '.container-objects h2');

    //CERTICACIONES ANIMACION
    animarAlVerlo('Titulos certificados', '.contenedor-cert h2');
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

    // Agregá las secciones que querés que aparezcan con scroll
    animarSeccion('.skills');
    animarSeccion('.inicio');
    animarSeccion('.container-skills');
    animarSeccion('.object');
    animarSeccion('.certifications');
}




