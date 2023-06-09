//Entrada-Proceso-Salida

//Entrada
//Proceso
//Salida= informacion del curso


//agregarCurso
//eliminarCurso
//vaciarCarrito

//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos')
const contenedor = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = [];


cargarEventos()
    //Eventos
function cargarEventos() {
    listaCursos.addEventListener('click', agregarCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
}

//Funciones
function agregarCurso(e) {
    e.preventDefault() //
        // eventdelegation
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso)
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {
        const cursos = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++
                        return curso
                } else {
                    return curso
                }
            })
            //spred operation
        articulosCarrito = [...cursos]
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito)
    carritoHTML();
}

function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        //e.target.parentElement.parentElement.remove()
        const cursoID = e.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID)
            //9
        carritoHTML()
    }
}

function vaciarCarrito() {
    //fomra lenta
    contenedor.innerHTML = ' ';

    //forma rapida
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }

    //cursos
    /*   */

}

function carritoHTML() {

    vaciarCarrito()

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
        <img src="${curso.imagen}" 
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>  <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `
        contenedor.appendChild(row); //1
    })
}


//Vaciar accedemos al texto 
//firstchild