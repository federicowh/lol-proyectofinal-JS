//Llamando a los Roles desde data/rolesTodos.json (MÉTODO GETJSON)
$('document').ready(function(){
    const URLROLESTODOS = 'data/rolesTodos.json';

    //Luchadores
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const luchador of response.rolesLuchadores){
                $('#mostrarRoles').append(`
                    <div class="luchadores">
                        <div class="mostrarRolesTitulo">
                            <img src="${luchador.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${luchador.nombre}</h5>
                                <h5>Posicion: ${luchador.posicion}</h5>
                                <h5>Dificultad: ${luchador.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${luchador.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${luchador.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.luchadores').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Luchadores
        $('.luchadores').hide();
    });
    //Luchadores: Función click aparece y desaparecen los otros
    $('#rolesLuchadores').on('click', function() {
        $('.luchadores').fadeIn('slow');
        $('.magos').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
    });


    //Magos
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const mago of response.rolesMagos){
                $('#mostrarRoles').append(`
                    <div class="magos">
                        <div class="mostrarRolesTitulo">
                            <img src="${mago.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${mago.nombre}</h5>
                                <h5>Posicion: ${mago.posicion}</h5>
                                <h5>Dificultad: ${mago.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${mago.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${mago.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.magos').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Magos
        $('.magos').hide();
    });
    //Magos: Función click aparece y desaparecen los otros
    $('#rolesMagos').on('click', function() {
        $('.magos').fadeIn('slow');
        $('.luchadores').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
    });


    //Asesinos
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const asesino of response.rolesAsesinos){
                $('#mostrarRoles').append(`
                    <div class="asesinos">
                        <div class="mostrarRolesTitulo">
                            <img src="${asesino.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${asesino.nombre}</h5>
                                <h5>Posicion: ${asesino.posicion}</h5>
                                <h5>Dificultad: ${asesino.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${asesino.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${asesino.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.asesinos').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Magos
        $('.asesinos').hide();
    });
    //Asesinos: Función click aparece y desaparecen los otros
    $('#rolesAsesinos').on('click', function() {
        $('.asesinos').fadeIn('slow');
        $('.luchadores').hide();
        $('.magos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
    });


    //Tiradores
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const tirador of response.rolesTiradores){
                $('#mostrarRoles').append(`
                    <div class="tiradores">
                        <div class="mostrarRolesTitulo">
                            <img src="${tirador.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${tirador.nombre}</h5>
                                <h5>Posicion: ${tirador.posicion}</h5>
                                <h5>Dificultad: ${tirador.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${tirador.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${tirador.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.tiradores').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Magos
        $('.tiradores').hide();
    });
    //Tiradores: Función click aparece y desaparecen los otros
    $('#rolesTiradores').on('click', function() {
        $('.tiradores').fadeIn('slow');
        $('.luchadores').hide();
        $('.magos').hide();
        $('.asesinos').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
    });


    //Apoyos
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const apoyo of response.rolesApoyos){
                $('#mostrarRoles').append(`
                    <div class="apoyos">
                        <div class="mostrarRolesTitulo">
                            <img src="${apoyo.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${apoyo.nombre}</h5>
                                <h5>Posicion: ${apoyo.posicion}</h5>
                                <h5>Dificultad: ${apoyo.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${apoyo.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${apoyo.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.apoyos').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Magos
        $('.apoyos').hide();
    });
    //Apoyos: Función click aparece y desaparecen los otros
    $('#rolesApoyos').on('click', function() {
        $('.apoyos').fadeIn('slow');
        $('.luchadores').hide();
        $('.magos').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.tanques').hide();
    });


    //Tanques
    $.getJSON(URLROLESTODOS, function(response, status){
        if(status === 'success'){
            for (const tanque of response.rolesTanques){
                $('#mostrarRoles').append(`
                    <div class="tanques">
                        <div class="mostrarRolesTitulo">
                            <img src="${tanque.imagen}">
                            <div class="mostrarRolesInfo">
                                <h5>Nombre: ${tanque.nombre}</h5>
                                <h5>Posicion: ${tanque.posicion}</h5>
                                <h5>Dificultad: ${tanque.dificultad}</h5>
                            </div>
                        </div>

                        <div class="mostrarRolesHistoria">
                            <p>${tanque.descripcion}</p>
                        </div>

                        <div class="mostrarRolesFinal">
                            <video src="${tanque.habilidad}" controls></video>
                        </div>
                    </div>
                `)
            }
        }

        //CSS
        $('.tanques').css({
            display: "flex",
            flexFlow: "column wrap",
            border: "2px solid black",
            width: "375px",
            margin: "30px 15px 35px 15px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)"
        });
        $('.mostrarRolesTitulo').css({
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
        });
        $('.mostrarRolesInfo h5').css({
            margin: "0px"
        });
        $('.mostrarRolesHistoria').css({
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            backgroundColor: "white",
            fontStyle: "italic",
            fontSize: "16px",
            height: "395px",
            padding: "0px 18px 0px 18px",
            borderBottom: "2px solid black"
        });
        $('.mostrarRolesHistoria').hover(function(){
            $(this).css({backgroundColor: "#EBA272", transition: "all 0.5s", color: "white"});
        },
        function(){
            $(this).css({backgroundColor: "white", transition: "all 0.5s", color: "black"});
        });
        $('.mostrarRolesFinal').css({
            backgroundColor: "black"
        });
        $('.mostrarRolesFinal video').css({
            width: "100%",
        });
        $('#mostrarRoles img').css({
            margin: "10px",
            width: "60px",
            height: "60px"
        });

        //Esconder Magos
        $('.tanques').hide();
    });
    //Tanques: Función click aparece y desaparecen los otros
    $('#rolesTanques').on('click', function() {
        $('.tanques').fadeIn('slow');
        $('.luchadores').hide();
        $('.magos').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
    });
});

//Aplicando on.click en el botón '#mostrarRolesClick' para mostrar '.roles'
$('document').ready(function(){
    $('#mostrarRolesClick').on('click', function(){
        $('.roles').toggle('slow');
        $('.luchadores').hide();
        $('.magos').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
        $('#mostrarCampeones').hide();
        $('#buscador').hide();
        $('#mapa').hide();
        $('#juego').hide();
    })
});