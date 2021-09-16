//Dando estilos con selectores JQUERY:

//Generales
$('*').css({
    padding: "0",
    margin: "0",
    boxSizing: "border-box"
});

$('body').css({
    backgroundColor: "#bfbfbf",
    fontFamily: "Libre Franklin, sans-serif"
});

//Encabezado: 

//Redes
$('#encabezado').css({
    display: "flex",
    flexFlow: "row wrap",
    backgroundColor: "black",
    width: "90%",
    height: "100%",
    margin: "auto",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none",
});

$('#social').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80px"
});

$('#social a').css({
    fontSize: "20px",
    marginLeft: "12px",
    marginRight: "12px",
    color: "white"
});
$("#social a").hover(function(){
    $(this).css({color: "#EBA272", transition: "all 0.5s", transform: "scale(1.9,1.9)"});
    }, function(){
    $(this).css({color: "white", transition: "all 0.5s", transform: "scale(1,1)"});
});

//Mostrar
$('#mostrar').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    margin: "auto",
    color: "white"
});

$('#mostrar i').css({
    color: "white",
    fontSize: "25px",
    cursor: "pointer"
});
$("#mostrar i").hover(function(){
    $(this).css({color: "#EBA272", transition: "all 0.5s"});
    }, function(){
    $(this).css({color: "white", transition: "all 0.5s"});
});

//Menu
$('#menu').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    height: "80px",
    margin: "auto",
    backgroundColor: "black",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none",
    display: "none"
});

$('.menu-contenido').css({
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
});

$('.menu-contenido a').css({
    textDecoration: "none",
});

$('.menu-contenido i, #logoLol').css({
    fontSize: "22px",
    marginLeft: "25px",
    marginRight: "25px",
    color: "white"
});
$('.menu-contenido i, #logoLol').hover(function(){
    $(this).css({color: "#EBA272", transform: "scale(1.9,1.9)", transition: "all 0.5s"});
    }, function(){
    $(this).css({color: "white", transform: "scale(1,1)", transition: "all 0.5s"});
});

$('#logoLol').hover(function(){
    $(this).css("transform", "rotate(360deg)");
    }, function(){
    $(this).css("transform", "rotate(0deg)");
});

//Bienvenida
$('#bienvenida').css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
    width: "90%",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "0px",
    userSelect: "none"
});

$('.bienvenida-contenido').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90px",
    backgroundColor: "white",
    color: "black"
});

$('#bienvenida-titulo').css({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "10px",
    fontSize: "15px",
    textAlign: "center",
    fontStyle: "italic",
});

//Buscar por Roles - por nombre:

//Botones para elegir entre BUSCAR POR ROLES/BUSCAR POR NOMBRE/MEMOLOL
$('.elegir').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    marginBottom: "30px",
    padding: "30px",
    backgroundColor: "black",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
});

$('.elegir button').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontStyle: "italic",
    fontWeight: "bold",
    width: "30%",
    height: "80px",
    cursor: "pointer",
    margin: "15px",
    border: "4px solid #EBA272",
    backgroundColor: "white"
});
$('.elegir button').hover(function(){
    $(this).css({
        backgroundColor: "#EBA272",
        color: "white",
        transition: "all 0.5s"
    });
},
function(){
    $(this).css({
        backgroundColor: "white",
        color: "black",
        transition: "all 0.5s"
    });
});

//Buscar por Roles
$('#seleccionaRol').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    height: "50px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "black",
    userSelect: "none"
});

$('.roles').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    width: "100%",
    margin: "auto",
    marginBottom: "30px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});

$('.roles h4').css({
    fontSize: "20px",
    fontStyle: "italic"
});

$('.roles').css({
    display: "none",
});

$('.roles ul').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    listStyle: "none"
});

$('.roles li').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    marginRight: "10px",
    width: "150px",
    height: "50px",
    cursor: "pointer",
    transition: "all 0.8s",
});
$('.roles li').hover(function(){
    $(this).css('background-color', '#EBA272');
},
function(){
    $(this).css('background-color', 'black');
});

//Campeones que aparecen luego de hacer click
$('#mostrarRoles').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "90%",
    margin: "auto",
    userSelect: "none",
});

//Buscar por nombre
$('#buscador').css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#bfbfbf",
    width: "100%",
    margin: "auto",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});
$('#buscador').css({
    display: "none",
});

$('#buscador h4').css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    fontStyle: "italic",
    fontSize: "20px",
    color: "black",
    backgroundColor: "white",
});

$('.contenedor-filtro').css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "50px"
});

$('#buscador input').css({
    textAlign: "center",
    width: "400px",
    height: "40px",
    margin: "10px",
    outline: "none",
    borderRadius: "0px",
});

$('#mostrarCampeones').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "90%",
    margin: "30px auto 30px auto",
    userSelect: "none",
    transition: "all 0.8s",
    backgroundColor: "#bfbfbfbf"
});

//Juego de la Memoria
$('.juego-contenedor').css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    width: "90%",
    margin: "auto auto 30px auto",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});

$('#juego-titulo').css({
    width: "100%",
    padding: "20px",
    fontSize: "85px",
    fontStyle: "italic",
    backgroundColor: "#000",
    color: "white"
});

$('ul').css({
    listStyle: "none",
});

$('li').css({
    listStyle: "none",
});

$('.btn').css({
    borderRadius: "10px",
    border: "none",
    color: "white",
    boxShadow: "5px 2px 20px 0 rgba(46, 61, 73, 0.5)",
    padding: "15px",
    margin: "15px"
});

$('.juego-puntuacion').css({
    color: "#000",
    fontSize: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
    padding: "10px",
    marginBottom: "20px",
    width: "100%"
});

$('.estrella-puntuacion > li').css({
    display: "inline-block",
    padding: "5px",
    margin: "10px 0px 10px 0px",
    color: "#EBA272"
});

$('.reiniciar-btn').css({
    fontSize: "16px",
    background: "black",
    cursor: "pointer"
});
$('.reiniciar-btn').hover(function(){
    $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s"});
},
function(){
    $(this).css({backgroundColor: "#000", transition: "all 0.5s"});
});

$('.contenedor-tiempo').css({
    margin: "20px 0px 10px 0px"
});

$('.timer').css({
    fontSize: "20px",
    fontWeight: "bold"
});

//Modal cuando ganas el juego
$('.modal').css({
    display: "none",
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(46, 61, 73, 0.6)",
    userSelect: "none"
});

$('.modal-contentido').css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    margin: "5% auto",
    border: "6px solid #EBA272",
    width: "75%"
});

$('.modal-contentido h2').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontStyle: "italic",
    margin: "0px 15px 20px 15px"
});

$('.modal-contentido i').css({
    color: "#EBA272",
    marginLeft: "10px"
});

$('.modal-contentido p').css({
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold"
});

$('.modal-cerrar').css({
    margin: "5px 20px 0px 0px",
    alignSelf: "flex-end",
    fontSize: "60px",
    color: "#000",
    cursor: "pointer"
});

$('.modal-cerrar').hover(function(){
    $(this).css({color: "#EBA272", transition: "all 0.5s"});
},
function(){
    $(this).css({color: "#000", transition: "all 0.5s"});
});

$('.jugar-denuevo-btn').css({
    backgroundColor: "#000",
    margin: "30px 0px 30px 0px",
    cursor: "pointer"
});
$('.jugar-denuevo-btn').hover(function(){
    $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s"});
},
function(){
    $(this).css({backgroundColor: "#000", transition: "all 0.5s"});
});

//Juego de la memoria (.mazo / .carta / .carta img)
$('.mazo').css({
    background: "linear-gradient(357deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    borderRadius: "10px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height: "100%",
    marginBottom: "30px",
    padding: "15px",
});

$('.carta').css({
    backgroundColor: "#EBA272",
    backgroundImage: "url('media/video/braum.gif')",
    backgroundPosition: "center center",
    backgroundSize: "228px 228xpx",
    borderRadius: "10px",
    height: "165px",
    width: "250px",
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

//Mapa
$('#mapa').css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "auto",
    marginBottom: "30px",
    backgroundColor: "black",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});

$('#mapa-titulo').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    minHeight: "70px",
    margin: "auto",
    backgroundColor: "white"
});

$('#mapa-luces').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    width: "250px",
});

$('#mapa h4').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontStyle: "italic",
    fontSize: "22px",
    height: "50px",
    width: "250px",
});

$('#mapa i').css({
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: "30px",
    height: "50px",
    cursor: "pointer"
});

$('#mapa img').css({
    width: "90%",
    opacity: "0.1"
});

//Video en Loop
$('#video').css({
    display: "flex",
    alignItems: "center",
    maxHeight: "530px",
    overflow: "hidden",
    width: "90%",
    margin: "auto",
    marginBottom: "30px",
    userSelect: "none",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
});

$('.video-contenido').css({
    width: "100%"
});

$('.video-contenido video').css({
    display: "block",
    width: "100%"
});

//Apps
$('#video-contenedor').css({
    display: "flex",
    flexFlow: "column wrap",
    position: "absolute",
    width: "90%"
});

$('#video-titulo').css({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

$('#video-apps').css({
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
});

$('#video-titulo img').css({
    width: "30%",
    opacity: "0"
});

$('#video-apps img').css({
    width: "180px",
    height: "180px",
    display: "none",
});

//Modos de Juego:
$('#modos').css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    width: "90%",
    margin: "auto",
    backgroundColor: "black",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});

$('#modos-titulo').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: "white",
    color: "black",
    fontSize: "22px",
    fontStyle: "italic",
    textAlign: "center",
});

$('#modos-contenedor-video').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
});

$('#modos-contenedor-video video').css({
    display: "flex",
    flexFlow: "row wrap",
    border: "4px solid #EBA272",
    height: "300px",
    margin: "20px 0px 10px 0px",
});

$('#modos-contenedor-video p').css({
    border: "4px solid #EBA272",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "50%",
    margin: "20px 0px 10px 0px",
    padding: "0px 15px 0px 15px",
    backgroundColor: "white",
    color: "black",
    fontStyle: "italic",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
});

$('#navegador').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%"
});

$('.navegador-contenido').css({
    border: "4px solid #EBA272",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-end",
    alignContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "25px"
});
$('.navegador-contenido').hover(function(){
    $(this).css({transform: "scale(1.08,1.08)", transition: "all 0.5s"});
},
function(){
    $(this).css({transform: "scale(1,1)", transition: "all 0.5s"});
});

$('.navegador-contenido h4').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "50px",
    color: "black",
    backgroundColor: "white",
    textAlign: "center"
});

$('.navegador-contenido img').css({
    width: "150px",
    height: "150px",
});

//Pie de Página
$('#pie').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
    width: "90%",
    margin: "30px auto auto auto",
    backgroundColor: "black",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
    userSelect: "none"
});

$('#pie p').css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    margin: "auto",
    padding: "20px",
    backgroundColor: "white",
    color: "black",
    fontSize: "14px",
    fontStyle: "italic",
});

$('.pie-sponsors').css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    padding: "20px",
});

$('.pie-sponsors img').css({
    width: "100%",
    margin: "15px",
    transition: "all 0.8s",
});
$('.pie-sponsors img').hover(function(){
    $(this).css('transform', 'scale(0.8,0.8)');
},
function(){
    $(this).css('transform', 'scale(1,1)');
});

$('#intel').css({
    width: "100px",
    height: "65px"
});

$('#twitch').css({
    width: "100px",
    height: "65px"
});

$('#riot').css({
    width: "100px",
    height: "80px"
});

$('.pie-sponsors i').css({
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    transition: "all 0.5s"
});
$('.pie-sponsors i').hover(function(){
    $(this).css('transform', 'scale(1.5,1.5)');
},
function(){
    $(this).css('transform', 'scale(1,1)');
});

//MediaQueries
const mediaQueries768 = window.matchMedia("(max-width: 768px)");
const mediaQueries500 = window.matchMedia("(max-width: 500px)");

function pantalla768(e){
    if (e.matches){
        //Menu
        $('.menu-contenido i').css({
            display: "none",
        });

        //Bienvenida
        $('.bienvenida-contenido').css({
            height: "100%",
        });

        //Botones buscar por
        $('.elegir button').css({
            width: "180px",
        });

        //Juego de la Memoria
        $('#juego-titulo').css({
            fontSize: "40px"
        });

        //Modos de Juego:
        $('#modos-contenedor-video p').css({
            fontSize: "12.5px"
        });

        $('#modos-contenedor-video').css({
            flexFlow: "column wrap",
        });
        
        $('#modos-contenedor-video video').css({
            margin: "20px 0px 0px 0px",
        });
        
        $('#modos-contenedor-video p').css({
            width: "300px",
            margin: "0px 0px 10px 0px",
        });

        //Apps
        $('#video-apps img').css({
            width: "90px",
            height: "90px",
        });

        //Pie de Página
        $('#pie p').css({
            height: "100%",
        });

        $('.pie-sponsors').css({
            flexFlow: "column wrap",
        });

    }else{
        //Menu
        $('.menu-contenido i').css({
            display: "flex",
        });

        //Bienvenida
        $('.bienvenida-contenido').css({
            height: "90px",
        });

        //Botones buscar por
        $('.elegir button').css({
            width: "30%",
        });

        //Juego de la Memoria
        $('#juego-titulo').css({
            fontSize: "85px"
        });

        //Modos de Juego:
        $('#modos-contenedor-video p').css({
            fontSize: "16px",
        });

        $('#modos-contenedor-video').css({
            flexFlow: "row wrap",
        });
        
        $('#modos-contenedor-video video').css({
            margin: "20px 0px 10px 0px",
        });
        
        $('#modos-contenedor-video p').css({
            width: "50%",
            margin: "20px 0px 10px 0px",
        });

        //Apps
        $('#video-apps img').css({
            width: "180px",
            height: "180px",
            display: "none",
        });

        //Pie de Página
        $('#pie p').css({
            height: "50px",
        });

        $('.pie-sponsors').css({
            flexFlow: "row wrap",
        });
    };
};

mediaQueries768.addListener(pantalla768);
pantalla768(mediaQueries768);


function pantalla500(e){
    if (e.matches){
        //Juego de la Memoria
        $('.carta').css({
            height: "45px",
            width: "73px",
            margin: "2px",
            backgroundSize: "67px 67px",
        });
    }else{
        //Juego de la Memoria
        $('.carta').css({
            height: "165px",
            width: "250px",
            margin: "15px",
            backgroundSize: "228px 228px",
        });
    };
};

mediaQueries500.addListener(pantalla500);
pantalla500(mediaQueries500);