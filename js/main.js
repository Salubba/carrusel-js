//VARIABLES
const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');
//capturamos la template y su primer elemento
const templateCirculo = document.querySelector('#template-circulo').content.firstElementChild;
const circulos = document.querySelector('#circulos');
const botonParar = document.querySelector('#parar');
const botonAutoplay = document.querySelector('#autoplay');
let intervalo = null;
const tiempoIntervaloSeg = 1;
const imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
// pagina para indicar donde estoy
let pagina = 1;
// 1 seg = 1000 mseg


//FUNCIONES

function activarAutoplay() {
    //si no existe
    if (intervalo === null) {
    // equivalente : intervalo = setInterval(avanzarFoto, tiempoIntervaloSeg * 1000);
        intervalo = setInterval(function () {
            avanzarFoto();
        }, tiempoIntervaloSeg * 1000);
    }
}

function desactivarAutoplay() {
    clearInterval(intervalo);
    intervalo = null;
}




function cambiarPagina(nuevaPagina) {
    pagina = nuevaPagina;
    render();
}


function avanzarFoto() {
    pagina = pagina + 1;
    //Verificamos que no hemos alcanzado el limite, en caso contrario lo restauramos a 1
    if ((imagenes.length + 1) <= pagina) {
        pagina = 1;
    }
    render();
}

function retrocederFoto() {
    pagina = pagina - 1;
    //comprobamos que no ha alcanzado el limite 0, en caso contrario lo restauramos a la ultima
    if (0 === pagina) {
        pagina = imagenes.length;
    }
    render();
}

function render() {
    //Imagen
    objetoImg.setAttribute('src', imagenes[pagina - 1]);
    //Borramos los circulos
    circulos.textContent = '';
    //Creamos todos los circulos
    imagenes.forEach(function (imagen, indice) {
        const nuevoCirculo = templateCirculo.cloneNode(true);
        nuevoCirculo.addEventListener('click', function () {
            cambiarPagina(indice + 1);
        });
        //Marcamos el que coincide con la pagina
        if (pagina === indice + 1) {
            nuevoCirculo.setAttribute('checked', true);
        }
        //Mostramos
        circulos.appendChild(nuevoCirculo);
    });
}


//EVENTOS
botonAvanzar.addEventListener('click', avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);
botonAutoplay.addEventListener('click',activarAutoplay);
botonParar.addEventListener('click', desactivarAutoplay);



//INICIO
render();
