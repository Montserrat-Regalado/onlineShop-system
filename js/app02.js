/* //entrada-proceso-salida 
//entrada 
//proceso 
//salida 

//agregarCurso
//eliminarCurso
//vaciarCarrito

//variables 

const carrito = document.querySelector('#carrito');
const listaCursos = carrito.querySelector('#lista-cursos')
const contenedor = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = [];
cargarEventos()

//eventos
function cargarEventos() {
    listaCursos.addEventListener('click', agregarCurso)
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//funciones 
function agregarCurso(e) {
    e.preventDefault()
        //codigo funcional
        //event delegation

    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso);
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
            //spred operator 
        articulosCarrito = [...cursos]
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    console.log(articulosCarrito)

    carritoHTML();
}

function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        // e.target.parentElement.parentElement.remove()

        const cursoID = e.target.gettAttribute('data-id') //1,2,3,4,5
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID); //1
        carritoHTML();
    }
}

function vaciarCarrito() {
    //forma lenta 
    // contenedor.innerHTML = '';

    //forma rapida 
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

}

function carritoHTML() {
    vaciarCarrito();
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
        <img scr= "${curso.imagen}"
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>  <a herf="#" class="borrar-curso" data-id="${curso.id}"></a>X</a>
        </td>
`
        contenedor.appendChild(row)
    })
}



//eliminar encontrar un container

//arraymethod, id

//Vaciar accedemos al texto

//firstchild */