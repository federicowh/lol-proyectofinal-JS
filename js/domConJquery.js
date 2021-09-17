//Encabezado:
//Redes Sociales
$('#social').prepend(`
    <a href="https://www.facebook.com/LeagueofLegendsLatino"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/lollatam"><i class="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/juegalol/"><i class="fab fa-instagram"></i></a>
    <a href="https://www.youtube.com/user/RiotGamesLatino"><i class="fab fa-youtube"></i></a>
    <a href="https://es.linkedin.com/company/riot-games"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.reddit.com/r/leagueoflegends/"><i class="fab fa-reddit-square"></i></a>
`);

//Toggle mostrar menu
$('#mostrar').prepend(`
    <i id="mostrar-menu" class='bx bx-menu'></i>
`);

//Menu
$('#menu').prepend(`
    <nav class="menu-contenido">
        <a href="index.html"><i class="bx bx-home nav-icon"></i></a>
        <i class="bx bx-group nav-icon"></i>
        <i class="bx bx-news nav-icon"></i>
        <a href="index.html"><img id="logoLol" src="media/logo/logolol.png"></i></a>
        <i class="bx bx-slideshow nav-icon"></i>
        <i class="bx bxs-shopping-bag nav-icon"></i>
        <i class="bx bxs-trophy nav-icon"></i>
    </nav>
`);

//Bienvenida, las dos opciones a elegir, roles y buscador
$('#bienvenida').prepend(`
    <div class="bienvenida-contenido">
        <p id="bienvenida-titulo">Bienvenido al simulador de campeones del videojuego, puedes buscar por roles para ver sus habilidades o buscar por filtro de nombre para ver sus imagenes completas. ¡Tambien puedes ver el mapa del juego!</p>
    </div>

    <div class="elegir">
        <button id="mostrarRolesClick">BUSCAR POR ROLES</button>
        <button id="mostrarCampeonesClick">BUSCAR POR NOMBRES</button>
        <button id="mostrarJuegoClick">MEMOLOL</button>
    </div>

    <div class="roles">
        <h4 id="seleccionaRol">Selecciona un Rol</h4>
        <ul class="rolesContenedor">
            <li id="rolesLuchadores">LUCHADORES</li>
            <li id="rolesMagos">MAGOS</li>
            <li id="rolesAsesinos">ASESINOS</li>
            <li id="rolesTiradores">TIRADORES</li>
            <li id="rolesApoyos">APOYOS</li>
            <li id="rolesTanques">TANQUES</li>
        </ul>
    </div>

    <div id="buscador">
        <h4>Busca un campeón</h4>
        <div class="contenedor-filtro"><input id="filtro" type="text" placeholder="Busca la imagen del campeón deseado..."></div>
    </div>
`);

//Juego de la memoria
$('#mostrarJuego').prepend(`
    <div class="juego-contenedor">
        <h1 id="juego-titulo">¡Memo Lol!</h1>

    <section class="juego-puntuacion">
        <ul id="estrella-puntuacion" class="estrella-puntuacion">
            <li class="estrella"><i class="fa fa-star"></i></li>
            <li class="estrella"><i class="fa fa-star"></i></li>
            <li class="estrella"><i class="fa fa-star"></i></li>
        </ul>

        <span class="contador-movimientos">0</span> Movimientos

        <div class="contenedor-tiempo">
            <span class="tiempo"><i class="fa fa-hourglass-start"></i> Tiempo: 00:00</span>
        </div>

        <div class="reiniciar">
            <button class="btn reiniciar-btn">Reiniciar <i class="fa fa-repeat"></i></button>
        </div>
    </section>

    <ul class="mazo"></ul>
</div>
`)

//Modal del juego de la memoria
$('#modal-contenedor').prepend(`
        <div id="modal" class="modal">
            <div class="modal-contentido">
                <span class="modal-cerrar">&times;</span>
                <h2>WOOW, ¡Completaste el juego! <i class='bx bx-wink-smile'></i></h2>
                <p>Te felicito por haber encontrado los 8 pares de cartas.</p>

                <button class="btn jugar-denuevo-btn">Volver a jugar</button>
            </div>
        </div>
`)

//Mapa Principal
$('#mapa').prepend(`
    <div id="mapa-titulo">
        <h4>¡Enciende las luces!</h4>

        <div id="mapa-luces">
            <i class='bx bxs-sun' id="prender"></i>
            <i class='bx bxs-moon' id="apagar"></i>
        </div>
    </div>

    <img src="media/mapa/mapaLol.png">
`);

//Modos de Juego
$('#modos').prepend(`
    <div id="modos-titulo">
        <h4>¡Distintos modos de juego!</h4>
    </div>

    <div id="modos-contenedor-video">
        <video id="modos-video-1" autoplay muted loop>
            <source src="media/video/grietadelinvocador.mp4" type="video/mp4">
        </video>

        <video id="modos-video-2" autoplay muted loop>
            <source src="media/video/aram.mp4" type="video/mp4">
        </video>

        <video id="modos-video-3" autoplay muted loop>
            <source src="media/video/tft.mp4" type="video/mp4">
        </video>

        <p id="modos-contenedor-texto">El objetivo de La Grieta del Invocador es simple: destruir el nexo enemigo. Para llegar a ello, los campeones deben atravesar las diferentes lineas o carriles (lanes) donde combatirán contra los campeones enemigos para destruir las torretas, dos por linea (cuatro por linea en total), hasta llegar a la base enemiga. La fuerza de las torretas crece según su cercanía al nexo.</p>
    </div>

    <div id="navegador">
        <div class="navegador-contenido"><h4>Grieta del Invocador</h4><img src="media/mapa/grietadelinvocador.jpg"></div>
        <div class="navegador-contenido"><h4>ARAM</h4><img src="media/mapa/aram.jpg"></div>
        <div class="navegador-contenido"><h4>Teamfight Tactics</h4><img src="media/mapa/tft.jpg"></div>
    </div>
`);

//Video en Loop
$('#video').prepend(`
    <div id="video-contenedor">
        <div id="video-titulo">
            <img src="media/titulo/titulo.png" alt="League of Legends">
        </div>

        <div id="video-apps">
            <img src="media/apps/appstore-badge.png" alt="App Store">
            <img src="media/apps/googleplay-badge.png" alt="Google Play">
            <img src="media/apps/windows-badge.png" alt="Windows">
        </div>
    </div>

    <div class="video-contenido">
        <video autoplay loop muted>
            <source src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm" type="video/mp4">
        </video>
    </div>
`);

//Pie de Página
$('#pie').append(`
    <p>™ & © 2021 Riot Games, Inc. Todos los derechos reservados. Riot Games, League of Legends y PvP.net son marcas comerciales o marcas registradas de Riot Games, Inc.</p>

    <div class="pie-sponsors">
        <img id="intel" src="media/sponsors/intelLogo.png">
        <img id="twitch" src="media/sponsors/twitchLogo.webp">
        <img id="riot" src="media/sponsors/riot-games.svg">
        <i class='bx bxs-up-arrow-square'></i>
    </div>
`);