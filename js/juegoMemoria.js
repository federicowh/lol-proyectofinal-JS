//Esconder Juego de la Memoria
$('#juego').hide();

//Aplicando on.click en el botón '#mostrarMemoClick' para mostrar '#juego'
$('document').ready(function(){
  $('#mostrarMemoClick').on('click', function(){
      $('#juego').fadeToggle(300);
      $('.roles').hide();
      $('.luchadores').hide();
      $('.magos').hide();
      $('.asesinos').hide();
      $('.tiradores').hide();
      $('.apoyos').hide();
      $('.tanques').hide();
      $('#mostrarCampeones').hide();
      $('#buscador').hide();
  })
})

//Mazo de cartas
const mazoCartas = ["Aatrox_0.jpg", "Aatrox_0.jpg", "Ahri_0.jpg", "Ahri_0.jpg", "Ashe_0.jpg", "Ashe_0.jpg", "Draven_0.jpg", "Draven_0.jpg", "Fizz_0.jpg", "Fizz_0.jpg", "Lux_0.jpg", "Lux_0.jpg", "Teemo_0.jpg", "Teemo_0.jpg", "TwistedFate_0.jpg", "TwistedFate_0.jpg"];

//Declarando todas las variables
const mazo = document.querySelector(".mazo");
let abiertos = [];
let encontrados = [];
const modal = document.getElementById("modal");
const reiniciar = document.querySelector(".reiniciar-btn");
const jugarOtraVez = document.querySelector(".jugar-denuevo-btn");
const contarMovimientos = document.querySelector(".contador-movimientos");
let movimientos = 0;
const estrella = document.getElementById("estrella-puntuacion").querySelectorAll(".estrella");
let contarEstrellas = 3;
const contarTiempo = document.querySelector(".tiempo");
let tiempo;
let minutos = 0;
let segundos = 0;
let comienzaTiempo = false;

//Función mezclar:
function mezclar(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Función comenzar a jugar
function comenzarJuego() {
  //Llamar a la función mezclar y almacenarla en una variable.
  const mezclarMazo = mezclar(mazoCartas); 
  //Iterar el array
  for (let i = 0; i < mezclarMazo.length; i++) {
    //Crear <li>
    const liTag = document.createElement('LI');
    liTag.classList.add('carta');

    //Crear <img>
    const addImage = document.createElement("IMG");
    liTag.appendChild(addImage);

    //Poner el "src"
    addImage.setAttribute("src", "media/cartas/" + mezclarMazo[i]);

    //Actualizamos el nuevo <li> al mazo
    mazo.appendChild(liTag);
  }
}

//Activando la función para jugar
comenzarJuego();

//Función para borrar la carta
function borrarCarta() {
  while(mazo.hasChildNodes()) {
    mazo.removeChild(mazo.firstChild);
  }
}

//Funcion temporizador
function temporizador() {
  // Actualizar el contador cada un segundo
  tiempo = setInterval(function() {
    segundos++;
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }

    contarTiempo.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Tiempo: " + minutos + " Minutos " + segundos + " Segundos" ;
  }, 1000);
}

//Parar tiempo
function pararTiempo() {
  clearInterval(tiempo);
}

//Reiniciar el tiempo
function reiniciarTodo() {
  //Parar el tiempo
  pararTiempo();
  comienzaTiempo = false;
  segundos = 0;
  minutos = 0;
  contarTiempo.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Tiempo: 00:00";

  //Reiniciar las estrellas
  estrella[1].firstElementChild.classList.add("fa-star");
  estrella[2].firstElementChild.classList.add("fa-star");
  contarEstrellas = 3;

  //Reiniciar movimientos:
  movimientos = 0;
  contarMovimientos.innerHTML = 0;

  //Limpiar los arrays
  encontrados = [];
  abiertos = [];

  //Limpiar el mazo
  borrarCarta();

  //Crear nuevo mazo
  comenzarJuego();

  //CSS
  $('.carta').css({
    backgroundColor: "#EBA272",
    backgroundImage: "url('media/video/braum.gif')",
    backgroundPosition: "center center",
    backgroundSize: "250px 250px",
    borderRadius: "10px",
    height: "200px",
    width: "270px",
    margin: "15px",
    cursor: "pointer"
  });
  
  $('.carta img').css({
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    userSelect: "none"
  });

  //MediaQueries
  const mediaQueries768 = window.matchMedia("(max-width: 768px)");
  const mediaQueries500 = window.matchMedia("(max-width: 500px)");

  function pantalla768(e){
      if (e.matches){
          //Juego de la Memoria
          $('#juego-titulo').css({
              fontSize: "40px"
          });
      }else{
          //Juego de la Memoria
          $('#juego-titulo').css({
              fontSize: "85px"
          });
      };
  };
  
  mediaQueries768.addListener(pantalla768);
  pantalla768(mediaQueries768);

  function pantalla500(e){
    if (e.matches){
        //Juego de la Memoria
        $('.carta').css({
            height: "40px",
            width: "55px",
            margin: "2px",
            backgroundSize: "58px 58px",
        });
    }else{
        //Juego de la Memoria
        $('.carta').css({
          height: "200px",
          width: "270px",
          margin: "15px",
          backgroundSize: "250px 250px",
        });
    };
  };

  mediaQueries500.addListener(pantalla500);
  pantalla500(mediaQueries500);
}

//Función contador de movimientos
function contadorMovimientos() {
  //Actualizar +1 los movimientos
  contarMovimientos.innerHTML ++;
  //Mantener el número de movimientos por cada par dado vuelta
  movimientos ++;
}

//Función puntuación de estrellas
function contadorEstrellas() {
  if (movimientos === 14) {
    estrella[2].firstElementChild.classList.remove("fa-star");
    contarEstrellas--;
  }
  if (movimientos === 22) {
    estrella[1].firstElementChild.classList.remove("fa-star");
    contarEstrellas--;
  }
}

//Función comparar dos
function compararDos() {
  //Dos cartas abiertas
  if (abiertos.length === 2) {
    document.body.style.pointerEvents = "none";
  }
  //Dos imágenes comparadas
  if (abiertos.length === 2 && abiertos[0].src === abiertos[1].src) {
    //Si se encuentra llamar a la función igual
    igual();
  } else if (abiertos.length === 2 && abiertos[0].src != abiertos[1].src) {
    //Si no se encuentra llamar a noIgual
    noIgual();
  }
}

//Función encontrado
function igual() {
  setTimeout(function() {
    abiertos[0].parentElement.classList.add("igual");
    abiertos[1].parentElement.classList.add("igual");
    encontrados.push(...abiertos);
    document.body.style.pointerEvents = "auto";

    //Chequear si ganó el juego encontrando 8 pares
    ganarJuego();

    //Limpiar los arrays abiertos
    abiertos = [];
  }, 600);

  //Llamar función contadorMovimientos para incrementar +1
  contadorMovimientos();
  contadorEstrellas();
}

//Función noEncontrado:
function noIgual() {
  setTimeout(function() {
    //Quitar class .voltear en las imágenes
    abiertos[0].parentElement.classList.remove("voltear");
    abiertos[1].parentElement.classList.remove("voltear");
    document.body.style.pointerEvents = "auto";
    //Limpiar los arrays abiertos
    abiertos = [];
  }, 700);

  //Llamar función contadorMovimientos para incrementar +1
  contadorMovimientos();
  contadorEstrellas();
}

//Función estadisticas finales:
function puntuacionActualizadaModal() {
  const estadisticas = document.querySelector(".modal-contentido");

  //Creando 3 diferentes <p>
  for (let i = 1; i <= 3; i++) {
    const estadisticasElemento = document.createElement("p");
    estadisticasElemento.classList.add("valoracion");
    estadisticas.appendChild(estadisticasElemento);
  }

  //Seleccionando todos los <p> con la clase stats y actualizando los datos
  let p = estadisticas.querySelectorAll("p.valoracion");
    p[0].innerHTML = "Tiempo demorado: " + minutos + " minutos y " + segundos + " segundos";
    p[1].innerHTML = "Movimientos realizados: " + movimientos;
    p[2].innerHTML = "Tu puntuación de estrellas es: " + contarEstrellas + " de 3";

  //CSS:
  $('p.valoracion').css({
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "italic",
  });
  
  $('p.valoracion:last-child').css({
    marginBottom: "30px",
  });
}

//Función mostrar modal
function mostrarModal() {
  const cerrarModal = document.getElementsByClassName("modal-cerrar")[0];
  modal.style.display= "block";

  //Cuando apretas el <span> (x), se cierra el modal
  cerrarModal.onclick = function() {
    modal.style.display = "none";
  };

  //Cuando apretas en cualquier lado por fuera del modal, se cierra también
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

//Función ganaste el juego
function ganarJuego() {
  if (encontrados.length === 16) {
    pararTiempo();
    puntuacionActualizadaModal();
    mostrarModal();
  }
}

//Al hacer click empieza el temporizador y se dan vuelta las cartas
mazo.addEventListener("click", function(evt) {
  if (evt.target.nodeName === "LI") {
    //Empieza el temporizador si haces click a una carta
    //Llamar a la función temporizador()
      if (comienzaTiempo === false) {
        comienzaTiempo = true; 
        temporizador();
      }
      //Llamar a la función darVuelta()
      darVuelta();
  }

  //Dar vuelta y mostrar la carta
  function darVuelta(){
    //Cuando <li> es apretado agrega la class .voltear para mostrar img
    evt.target.classList.add("voltear");
    //Llamar a la función agregarCartasAbiertas()
    agregarCartasAbiertas();
  }

  //Agregar las cartas dadas vuelta a un array vacío
  function agregarCartasAbiertas(){
    if (abiertos.length === 0 || abiertos.length === 1) {
      //Hacer push de esa img al array
      abiertos.push(evt.target.firstElementChild);
    }
    //Llamar a la función compararDos()
    compararDos();
  }
});

//Al hacer click en el botón ".reset-btn" se llama a la función reiniciarTodo()
reiniciar.addEventListener('click', reiniciarTodo);

//Al hacer click en el botón ".play-again-btn" se llama a la función reiniciarTodo()
jugarOtraVez.addEventListener('click',function() {
  modal.style.display = "none";
  reiniciarTodo();
});