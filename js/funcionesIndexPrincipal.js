//Cambiar el ícono del menú:
//Toggle cambiar icono
$('document').ready(function(){
    $('#mostrar-menu').on('click', function(){
        $('#menu').toggle('slow', function(){
            if($('#menu').is(":visible")){
                $('#mostrar-menu').addClass('bx bx-x');
            }else if($('#menu').is(":hidden")){
                $('#mostrar-menu').removeClass('bx bx-x');
                $('#mostrar-menu').addClass('bx bx-menu');
            };
        });
    });
});

//Video en Loop Página Principal:
//Haciendo visible el título con la opacidad
$('document').ready(function(){
    $('#video-titulo img').animate({opacity: "1"}, 2500);
});

//Cuando entras con el mouse en el div $('#video') se muestran las plataformas disponibles
$('document').ready(function(){
    $('#video').mouseenter(function(){
        $('#video-apps img').show('slow');
    });
});

//Mapa Principal
//Prender Luces
$('document').ready(function(){
    $('#prender').on('click', function(){
        $('#mapa img').animate({
            opacity: "1"
        });

        $('#prender').css({
            color: "#EBA272",
            transition: "all 0.5s"
        })

        $('#apagar').css({
            color: "black",
            transition: "all 0.5s"
        })
    });
});

//Apagar luces
$('document').ready(function(){
    $('#apagar').on('click', function(){
        $('#mapa img').animate({
            opacity: "0.1"
        });

        $('#apagar').css({
            color: "#EBA272",
            transition: "all 0.5s"
        })

        $('#prender').css({
            color: "black",
            transition: "all 0.5s"
        })
    });
});

//Distintos Modos de Juego:
//Al tocar la imagen cambiará el video del medio
$('document').ready(function(){
    $('#modos-video-1').show('slow');
    $('#modos-video-2').hide('slow');
    $('#modos-video-3').hide('slow');
});

$('document').ready(function(){
    $('.navegador-contenido:nth-child(1)').click(function(){
        $('#modos-contenedor-texto').text('El objetivo de La Grieta del Invocador es simple: destruir el nexo enemigo. Para llegar a ello, los campeones deben atravesar las diferentes lineas o carriles (lanes) donde combatirán contra los campeones enemigos para destruir las torretas, dos por linea (cuatro por linea en total), hasta llegar a la base enemiga. La fuerza de las torretas crece según su cercanía al nexo.');
        $('#modos-video-1').show('slow');
        $('#modos-video-2').hide('slow');
        $('#modos-video-3').hide('slow');
    });
});

$('document').ready(function(){
    $('.navegador-contenido:nth-child(2)').click(function(){
        $('#modos-contenedor-texto').text('El Abismo de los Lamentos; más conocido como ARAM por siglas del inglés All Random All Mid (Todo aleatorio, todos Mid), es un modo de juego que permite jugar a todos los jugadores enfrentarse en el carril del medio en la zona helada e invernal del mundo del Freljord. Los jugadores, deberán batirse en un 5 vs 5 en el carril central, donde solamente habrá un inhibidor tanto aliado como enemigo y 4 torres para cada equipo; 8 torretas en total en el mapa. Asimismo, lo que hace característico a ARAM sobre todo modo de juego, es que no existe una selección de campeones, todos es aleatorio.');
        $('#modos-video-1').hide('slow');
        $('#modos-video-2').show('slow');
        $('#modos-video-3').hide('slow');
    });
});

$('document').ready(function(){
    $('.navegador-contenido:nth-child(3)').click(function(){
        $('#modos-contenedor-texto').text('TFT es un juego de estrategia por rondas bajo el concepto de usar cartas de tus personajes favoritos en un especie de ajedrez en el que te enfrentarás a siete oponentes en una competencia por crear un poderoso equipo que peleará por ti. Tu objetivo: ser el último en quedar en pie.');
        $('#modos-video-1').hide('slow');
        $('#modos-video-2').hide('slow');
        $('#modos-video-3').show('slow');
    });
});

//Scroll para subir al encabezado:
//Apretando los botones ('.ir-arriba i') podemos ir al encabezado de la página
$('document').ready(function(){
    $('.pie-sponsors i').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
});

