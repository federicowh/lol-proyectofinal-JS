//Caja de Comentarios
function soporteLocalStorage () {
    return typeof localStorage !== 'undefined';
};

function obtenerComentarios() {
    return JSON.parse(localStorage.getItem('comentario')) || [];
};

function guardarComentarios (comentarios, comentarioStr1, accion) {
    if (!comentarioStr1 && comentarios.indexOf(comentarioStr1) < 0) {
    accion(parametroErr);
    };

    accion(undefined, comentarioStr1);
};

function agregarLi(enLinea, str, index) {
    let li = document.createElement('LI');
    li.classList.add("comentarios-creados");
    li.innerHTML = str;
    enLinea.appendChild(li);

    $('.comentarios-creados').css({
        fontSize: "25px",
        fontStyle: "italic",
        margin: "25px",
        paddingLeft: "15px",
        borderLeft: "5px solid #EBA272",
    });
};

function cargarComentarios(enLinea) {
    let comentarios = obtenerComentarios();
    if (comentarios) {
        for (let i = 0; i < comentarios.length; i++) {
            agregarLi(enLinea, comentarios[i], i);
        };    
    };
};

function limpiarComentarios(enLinea) {
    localStorage.removeItem('comentario');
    enLinea.innerHTML = '';
};

if (soporteLocalStorage()) {
    iniciarAppComentarios();
}else{};

function iniciarAppComentarios() {
    let comentariosFormulario = document.getElementById('comentarios-form'),
    comentariosLista = document.getElementById('comentarios-stream'),
    comentariosInput = document.getElementById('comentarios-input'),
    eliminarTodo = document.getElementById('eliminar-todo');

    cargarComentarios(comentariosLista);
    
    eliminarTodo.addEventListener('click', function() {
        limpiarComentarios(comentariosLista);
    }, true);
    
    comentariosFormulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let comentarioStr2 = comentariosInput.value,
        comentarios = obtenerComentarios();

        guardarComentarios(comentarios, comentarioStr2, function(parametroErr, value) {

        if (parametroErr) {
            return;
        };

        comentarios.push(value);
        localStorage.setItem('comentario', JSON.stringify(comentarios));  
        agregarLi(comentariosLista, comentarioStr2);
        comentariosInput.value = '';      
    });
    }, true);
};