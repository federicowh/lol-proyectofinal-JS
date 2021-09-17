// //Función para buscar Campeón por H5:
$(document).ready(function(){
    $('#filtro').on("keyup", function(){
        const valor = $(this).val().toLowerCase();
        $('.campeonesEnImagenes').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
        });
    });
});
