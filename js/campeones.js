//Llamando a todos los campeones desde data/campeonesTodos.json (MÉTODO GETJSON)
$('document').ready(function(){
    const URLCAMPEONESTODOS = 'data/campeonesTodos.json';

    $.getJSON(URLCAMPEONESTODOS, function(response, status){
        if(status === 'success'){
            for (const campeon of response.campeonesTodos){
                $('#mostrarCampeones').append(`
                    <div class="campeonesEnImagenes">
                        <img src="${campeon.imagen}">
                        <h5 id="buscarNombre">${campeon.nombre}</h5>
                    </div>
                `)
            }
        }

        //CSS
        $('.campeonesEnImagenes').css({
            margin: "6px 15px 15px 15px",
            backgroundColor: "black",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.55)",
            borderRadius: "5px",
            transition: "all 0.8s",
        })
        $('.campeonesEnImagenes').hover(function(){
            $(this).css('transform', 'scale(1.05,1.05)');
        },
        function(){
            $(this).css('transform', 'scale(1,1)');
        })
        $('.campeonesEnImagenes img').css({
            width: "510px",
            height: "300px",
            transition: "all 0.8s",
        })
        $('.campeonesEnImagenes h5').css({
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "50px",
            margin: "0px auto 0px auto",
            fontWeight: "bold",
            fontSize: "25px",
        })

        $('#mostrarCampeones').hide();
    });
});

//Aplicando on.click en el botón '#mostrarCampeonesClick' para mostrar '#buscador' y '#mostrarCampeones'
$('document').ready(function(){
    $('#mostrarCampeonesClick').on('click', function(){
        $('#buscador').toggle('slow');
        $('#mostrarCampeones').fadeToggle('fast');
        $('.roles').hide();
        $('.luchadores').hide();
        $('.magos').hide();
        $('.asesinos').hide();
        $('.tiradores').hide();
        $('.apoyos').hide();
        $('.tanques').hide();
        $('#mapa').hide();
        $('#juego').hide();
    })
});


