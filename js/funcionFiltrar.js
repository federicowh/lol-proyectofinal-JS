// //Función para buscar Campeón por H5:
$(document).ready(function(){
    $('#filtro').on("keyup", function(){
        const value = $(this).val().toLowerCase();
        $('.campeonesEnImagenes').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
