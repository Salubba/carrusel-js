//VARIABLES
const objetoImg = document.querySelector('#imagen');
const botonAvanzar = document.querySelector('#avanzar');
const botonRetroceder = document.querySelector('#retroceder');
const imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
// pagina para indicar donde estoy
let pagina = 1;


//FUNCIONES
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
    if (0 === pagina) {
        pagina = imagenes.lenght;
    }
    render();
}

function render() {

    objetoImg.setAttribute('src', imagenes[pagina - 1] )

}

//EVENTOS
botonAvanzar.addEventListener('click', avanzarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);


//INICIO
render();
