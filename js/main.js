//VARIABLES
const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');
//capturamos la template y su primer elemento
const templateCirculo = document.querySelector('#template-circulo').content.firstElementChild;
const circulos = document.querySelector('#circulos');
const imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
// pagina para indicar donde estoy
let pagina = 1;


//FUNCIONES

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
    //Circulos
    circulos.textContent = '';
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



//INICIO
render();
